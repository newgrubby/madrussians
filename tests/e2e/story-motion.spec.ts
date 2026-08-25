import {mkdir} from "node:fs/promises";
import path from "node:path";
import {expect,test} from "@playwright/test";

const checkpoints=[0,.2,.35,.5,.65,.8,.95] as const;
const names=["00-start","20-reveal","35-hold","50-hold","65-hold","80-exit-start","95-exit"] as const;

async function seekStory(page:import("@playwright/test").Page,progress:number){
  await page.locator("main").waitFor({state:"visible"});
  await page.waitForTimeout(300);
  await page.evaluate(p=>{
    document.documentElement.style.scrollBehavior="auto";
    const story=document.querySelector<HTMLElement>("#story")!;
    const start=story.getBoundingClientRect().top+scrollY;
    const distance=story.offsetHeight-innerHeight;
    scrollTo({top:start+distance*p,behavior:"auto"});
  },progress);
  await page.waitForTimeout(350);
}

for(const locale of ["ru","en"] as const){
  for(const viewport of [{width:1440,height:900},{width:1920,height:1080}]){
    test(`${locale} Story hold remains vertically readable at ${viewport.width}`,async({page})=>{
      await page.setViewportSize(viewport);
      await page.goto(`/${locale}`,{waitUntil:"load"});
      let holdReference:{top:number;bottom:number}[]|undefined;
      for(const progress of [.35,.5,.65]){
        await seekStory(page,progress);
        const boxes=await page.locator(".storyLine").evaluateAll(lines=>lines.map(line=>{
          const box=line.getBoundingClientRect();
          return {top:box.top,bottom:box.bottom};
        }));
        for(const box of boxes){
          expect(box.top).toBeGreaterThanOrEqual(viewport.height*.04);
          expect(box.bottom).toBeLessThanOrEqual(viewport.height*.96);
        }
        if(!holdReference) holdReference=boxes;
        else boxes.forEach((box,index)=>{
          expect(Math.abs(box.top-holdReference![index].top)).toBeLessThan(3);
          expect(Math.abs(box.bottom-holdReference![index].bottom)).toBeLessThan(3);
        });
      }
    });
  }
}

test("capture Story timeline checkpoints",async({page})=>{
  test.skip(process.env.CAPTURE_STORY_FIX!=="1");
  await page.setViewportSize({width:1440,height:900});
  await page.goto("/ru",{waitUntil:"load"});
  const directory=path.join(process.cwd(),"qa","story-fix");
  await mkdir(directory,{recursive:true});
  for(let i=0;i<checkpoints.length;i++){
    await seekStory(page,checkpoints[i]);
    await page.screenshot({path:path.join(directory,`${names[i]}.png`),animations:"allow"});
  }
  await page.goto("/en",{waitUntil:"load"});
  await seekStory(page,.5);
  await page.screenshot({path:path.join(directory,"en-50-hold.png"),animations:"allow"});
  await page.setViewportSize({width:1920,height:1080});
  await page.goto("/ru",{waitUntil:"load"});
  await seekStory(page,.5);
  await page.screenshot({path:path.join(directory,"ru-1920-50-hold.png"),animations:"allow"});
  await page.setViewportSize({width:390,height:844});
  for(const locale of ["ru","en"]){
    await page.goto(`/${locale}`,{waitUntil:"load"});
    await page.locator("#story").screenshot({path:path.join(directory,`${locale}-mobile.png`),animations:"disabled"});
  }
});

test("mobile Story remains editorial and has no overflow",async({page})=>{
  await page.setViewportSize({width:390,height:844});
  for(const locale of ["ru","en"]){
    await page.goto(`/${locale}`,{waitUntil:"load"});
    await expect(page.locator(".storyStage")).not.toHaveCSS("position","sticky");
    expect(await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth)).toBe(0);
  }
});

test("reduced motion Story is immediately readable",async({page})=>{
  await page.emulateMedia({reducedMotion:"reduce"});
  await page.goto("/ru",{waitUntil:"load"});
  for(const line of await page.locator(".storyLine").all()){
    expect(await line.evaluate(element=>element.getBoundingClientRect().top-element.parentElement!.getBoundingClientRect().top)).toBeLessThan(1);
    await expect(line).toHaveCSS("opacity","1");
  }
});
