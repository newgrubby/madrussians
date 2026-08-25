import {expect,test,type Page} from "@playwright/test";
import {mkdir} from "node:fs/promises";
import path from "node:path";

const mobile={width:390,height:844};
async function open(page:Page,locale:"ru"|"en"="ru"){
  await page.setViewportSize(mobile);
  await page.goto(`/${locale}`,{waitUntil:"load"});
  await page.locator("main").waitFor({state:"visible"});
}

test.describe("Phase 08 mobile field edition",()=>{
  test("route index navigates and releases scroll lock",async({page})=>{
    await open(page);
    await page.locator(".menuButton").click();
    await expect(page.locator("#route-index")).toBeVisible();
    await expect(page.locator("body")).toHaveCSS("overflow","hidden");
    await page.locator('#route-index a[href="#expeditions"]').click();
    await expect(page.locator("#route-index")).toHaveCount(0);
    await expect(page.locator("body")).not.toHaveCSS("overflow","hidden");
    await expect(page.locator("#expeditions")).toBeInViewport();
  });

  test("sticky expedition deck releases in both scroll directions",async({page})=>{
    await open(page);
    const deck=page.locator(".expeditionGrid");
    await deck.scrollIntoViewIfNeeded();
    const cards=page.locator(".expeditionCard");
    await expect(cards).toHaveCount(8);
    expect(await cards.first().evaluate(el=>getComputedStyle(el).position)).toBe("sticky");
    await cards.last().scrollIntoViewIfNeeded();
    await page.locator("#story").scrollIntoViewIfNeeded();
    await expect(page.locator("#story")).toBeInViewport();
    await page.evaluate(()=>{document.documentElement.style.scrollBehavior="auto";const story=document.querySelector<HTMLElement>("#story")!;scrollTo(0,story.offsetTop+innerHeight*.55)});
    await page.waitForTimeout(80);
    expect(await cards.last().evaluate(el=>el.getBoundingClientRect().bottom)).toBeLessThanOrEqual(1);
    await cards.nth(3).scrollIntoViewIfNeeded();
    await expect(cards.nth(3)).toBeInViewport();
  });

  test("tap format, reveal form and use destination list",async({page})=>{
    await open(page);
    await page.locator("#format").scrollIntoViewIfNeeded();
    await page.locator(".formatList button").nth(2).click();
    await expect(page.locator(".formatList button").nth(2)).toHaveClass(/active/);
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.locator("#contact form")).not.toBeVisible();
    await page.locator(".formReveal").click();
    await expect(page.locator("#contact form")).toBeVisible();
    await page.locator(".destinationTrigger").click();
    await expect(page.locator(".destinationMenu")).toBeVisible();
    const bounds=await page.locator(".destinationMenu").boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x+bounds!.width).toBeLessThanOrEqual(mobile.width);
    await page.locator(".destinationMenu button").nth(1).click();
  });

  test("format image stage stays visible and follows native scroll",async({page})=>{
    await open(page);
    const stage=page.locator(".formatStage"),rows=page.locator(".formatList button");
    await stage.scrollIntoViewIfNeeded();
    expect(await stage.evaluate(element=>getComputedStyle(element).position)).toBe("sticky");
    await rows.nth(3).evaluate(element=>{document.documentElement.style.scrollBehavior="auto";const top=element.getBoundingClientRect().top+scrollY-innerHeight*.78;scrollTo(0,top)});await page.waitForTimeout(120);
    await expect(rows.nth(3)).toHaveClass(/active/);
    await expect(stage).toBeInViewport();
    await rows.nth(1).evaluate(element=>{const top=element.getBoundingClientRect().top+scrollY-innerHeight*.78;scrollTo(0,top)});await page.waitForTimeout(120);
    await expect(rows.nth(1)).toHaveClass(/active/);
    await expect(stage).toBeInViewport();
  });

  test("final story word clears the last photograph",async({page})=>{
    for(const locale of ["ru","en"] as const){
      await open(page,locale);
      const word=page.locator(".storyClip").nth(2).locator(".storyLine");
      const geometry=await word.evaluate(wordElement=>{const photoElement=document.querySelector<HTMLElement>(".storyStage .s3")!,range=document.createRange();range.selectNodeContents(wordElement);const wordRect=range.getBoundingClientRect(),photoRect=photoElement.getBoundingClientRect();return{wordBottom:wordRect.bottom,photoTop:photoRect.top}});
      expect(geometry.wordBottom,locale).toBeLessThanOrEqual(geometry.photoTop-12);
    }
  });

  for(const locale of ["ru","en"] as const){
    test(`${locale} has no horizontal overflow and footer is reachable`,async({page})=>{
      await open(page,locale);
      for(const id of ["top","expeditions","story","format","archive","about","contact"]){
        await page.locator(`#${id}`).scrollIntoViewIfNeeded();
        expect(await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth)).toBe(0);
      }
      await page.locator("footer").scrollIntoViewIfNeeded();
      await expect(page.locator("footer")).toBeInViewport();
    });
  }

  test("reduced motion keeps all signature scenes",async({page})=>{
    await page.emulateMedia({reducedMotion:"reduce"});
    await open(page,"en");
    await expect(page.locator(".hero h1")).toContainText("EXPEDITIONS.");
    await expect(page.locator(".expeditionCard")).toHaveCount(8);
    await expect(page.locator(".storyHeadline")).toBeVisible();
  });

  test("polish keeps story and field-log typography separated",async({page})=>{
    for(const locale of ["ru","en"] as const){
      await open(page,locale);
      const storyLine=page.locator(".storyClip").nth(1).locator(".storyLine");
      await storyLine.scrollIntoViewIfNeeded();
      const storyBounds=await storyLine.evaluate(element=>{const range=document.createRange();range.selectNodeContents(element);const rect=range.getBoundingClientRect();return{left:rect.left,right:rect.right}});
      expect(storyBounds.left).toBeGreaterThanOrEqual(-1);
      expect(storyBounds.right).toBeLessThanOrEqual(mobile.width-12);
    }
    await page.goto("/ru");
    await page.locator("#archive").scrollIntoViewIfNeeded();
    for(const caption of await page.locator(".archive figcaption").all()){
      const code=await caption.locator(":scope > span").boundingBox();
      const place=await caption.locator(":scope > b").boundingBox();
      expect(code).not.toBeNull();expect(place).not.toBeNull();
      expect(code!.x+code!.width).toBeLessThanOrEqual(place!.x);
    }
    await page.locator("#format").scrollIntoViewIfNeeded();
    await expect(page.locator(".formatIndicator").first()).toBeVisible();
    await expect(page.locator(".formatDesktopArrow").first()).not.toBeVisible();
  });

  test("semantic display type stays inside every supported mobile viewport",async({page})=>{
    const selectors=[".editorialInterruption>p",".expeditions .sectionHead h2",".storyHeadline h2",".format h2",".archiveHead h2",".about h2",".editorial h2",".contact h2",".cardBody h3"];
    for(const locale of ["ru","en"] as const){
      for(const width of [320,360,375,390,393,430]){
        await page.setViewportSize({width,height:width===430?932:width===320?700:844});
        await page.goto(`/${locale}`,{waitUntil:"load"});
        await page.evaluate(()=>document.fonts.ready);
        const rects=await page.evaluate((targets:string[])=>targets.flatMap(selector=>[...document.querySelectorAll(selector)].flatMap(element=>{
          const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);const result:{selector:string;text:string;left:number;right:number}[]=[];let node;
          while((node=walker.nextNode())){if(!node.textContent?.trim())continue;const range=document.createRange();range.selectNodeContents(node);for(const rect of range.getClientRects())result.push({selector,text:node.textContent.trim(),left:rect.left,right:rect.right})}
          return result;
        })),selectors);
        for(const rect of rects){
          expect(rect.left,`${locale} ${width}px ${rect.selector}: ${rect.text}`).toBeGreaterThanOrEqual(-1);
          expect(rect.right,`${locale} ${width}px ${rect.selector}: ${rect.text}`).toBeLessThanOrEqual(width+1);
        }
      }
    }
  });
});

test("Phase 08 pass-one captures",async({page})=>{
  test.skip(!process.env.MOBILE08_CAPTURE,"Set MOBILE08_CAPTURE=1 to capture the pass");
  const directory=path.join(process.cwd(),"qa","mobile08");
  await mkdir(directory,{recursive:true});
  for(const [locale,width,height] of [["ru",390,844],["en",390,844],["ru",360,800],["ru",430,932]] as const){
    await page.setViewportSize({width,height});
    await page.goto(`/${locale}`,{waitUntil:"load"});
    for(const id of ["expeditions","story","format","archive","about","contact"]){await page.locator(`#${id}`).scrollIntoViewIfNeeded();await page.waitForTimeout(80)}
    await page.evaluate(()=>{document.documentElement.style.scrollBehavior="auto";scrollTo(0,0)});
    await page.waitForTimeout(200);
    await page.screenshot({path:path.join(directory,`pass1-${width}-${locale}.png`),fullPage:true,animations:"disabled"});
  }
});

test("Phase 08 final capture matrix and states",async({page})=>{
  test.skip(!process.env.MOBILE08_FINAL,"Set MOBILE08_FINAL=1 to capture final QA");
  test.setTimeout(180_000);
  const directory=path.join(process.cwd(),"qa","mobile08","final");
  await mkdir(directory,{recursive:true});
  for(const [locale,width,height] of [["ru",430,932],["ru",390,844],["ru",375,812],["ru",360,800],["en",430,932],["en",390,844],["en",360,800]] as const){
    await page.setViewportSize({width,height});await page.goto(`/${locale}`,{waitUntil:"load"});
    await page.addStyleTag({content:"nextjs-portal{display:none!important}"});
    for(const id of ["expeditions","story","format","archive","about","contact"]){await page.locator(`#${id}`).scrollIntoViewIfNeeded();await page.waitForTimeout(60)}
    await page.evaluate(()=>{document.documentElement.style.scrollBehavior="auto";scrollTo(0,0)});await page.waitForTimeout(150);
    await page.screenshot({path:path.join(directory,`${locale}-${width}-full.png`),fullPage:true,animations:"disabled"});
  }
  await page.setViewportSize(mobile);await page.goto("/ru",{waitUntil:"load"});await page.addStyleTag({content:"nextjs-portal{display:none!important}"});
  const shot=async(name:string)=>page.screenshot({path:path.join(directory,`${name}.png`),animations:"disabled"});
  await shot("hero");await page.locator(".menuButton").click();await shot("index-menu");await page.locator(".menuButton").click();
  const cards=page.locator(".expeditionCard");await cards.first().scrollIntoViewIfNeeded();await page.waitForTimeout(120);await shot("expedition-start");
  await cards.nth(3).scrollIntoViewIfNeeded();await page.waitForTimeout(120);await shot("expedition-middle");
  await cards.last().scrollIntoViewIfNeeded();await page.waitForTimeout(120);await shot("expedition-end");
  for(const [name,selector] of [["story","#story"],["format","#format"],["field-log","#archive"],["cta","#contact"]] as const){await page.locator(selector).scrollIntoViewIfNeeded();await page.waitForTimeout(120);await shot(name)}
  await page.locator(".formReveal").click();await shot("form-open");await page.locator(".destinationTrigger").click();await shot("destination-open");
});
