import {mkdir} from "node:fs/promises";
import path from "node:path";
import {expect,test} from "@playwright/test";

const stage=process.env.PHASE06_STAGE;

test.describe("Phase 06 visual review",()=>{
  test.skip(!stage,"Set PHASE06_STAGE to capture identity review screenshots");

  for(const locale of ["ru","en"] as const){
    test(`${stage} ${locale} desktop`,async({page})=>{
      const target=path.join(process.cwd(),"qa","phase06",`${stage}-${locale}.png`);
      await mkdir(path.dirname(target),{recursive:true});
      await page.goto(`/${locale}`,{waitUntil:"networkidle"});
      await expect(page.locator("main")).toBeVisible();
      await page.screenshot({path:target,fullPage:true,animations:"disabled"});
    });
    test(`${stage} ${locale} mobile`,async({page})=>{
      await page.setViewportSize({width:390,height:844});
      const target=path.join(process.cwd(),"qa","phase06",`${stage}-${locale}-mobile.png`);
      await mkdir(path.dirname(target),{recursive:true});
      await page.goto(`/${locale}`,{waitUntil:"networkidle"});
      await expect(page.locator("main")).toBeVisible();
      await page.screenshot({path:target,fullPage:true,animations:"disabled"});
    });
  }

  test("final section details",async({page})=>{
    test.skip(stage!=="final");
    await page.goto("/ru",{waitUntil:"networkidle"});
    const sections={hero:"#top",expeditions:"#expeditions",story:"#story",fieldlog:"#archive",finalcta:"#contact"};
    for(const [name,selector] of Object.entries(sections)){
      const section=page.locator(selector);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await section.screenshot({path:path.join(process.cwd(),"qa","phase06",`final-${name}-ru.png`),animations:"disabled"});
    }
  });
});
