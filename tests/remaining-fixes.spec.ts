import {expect,test} from "@playwright/test";
import fs from "node:fs";

const phase=process.env.REMAINING_PHASE??"after";
const output="qa/remaining-fixes";

test("capture remaining visual fixes",async({page})=>{
  fs.mkdirSync(output,{recursive:true});
  await page.setViewportSize({width:1440,height:900});
  await page.emulateMedia({reducedMotion:"reduce"});
  await page.goto("/ru",{waitUntil:"networkidle"});
  await page.locator("#top").screenshot({path:`${output}/hero-ru-${phase}.png`});
  await page.locator(".editorialInterruption").scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  await page.locator(".editorialInterruption").screenshot({path:`${output}/editorial-${phase}.png`});
  await page.locator("#story").scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  await page.locator(".storyStage").screenshot({path:`${output}/story-${phase}.png`});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth)).toBe(0);
});
