import {expect,test} from "@playwright/test";

for(const locale of ["ru","en"] as const){
 test(`${locale}: concept identity and content`,async({page})=>{
  await page.goto(`/${locale}`);
  await expect(page.locator("header .logo")).toHaveText("RAVENORTH");
  await expect(page.getByText("EO LABS CONCEPT / 2026").first()).toBeVisible();
  await expect(page.locator(".expeditionCard")).toHaveCount(8);
  await expect(page.locator(".editorialGrid article")).toHaveCount(3);
  await expect(page.locator("footer")).toContainText("EO Labs");
  await expect(page.locator('a[href*="madrussians"],a[href*="t.me"],a[href*="wa.me"],a[href*="instagram"]')).toHaveCount(0);
  await expect(page.locator("body")).not.toContainText("139 000");
  await expect(page.locator("body")).not.toContainText("61 ЭКСПЕДИЦ");
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.locator("form small")).toBeVisible();
  await expect(page.locator("form button[type=submit]")).toHaveAttribute("aria-disabled","true");
  await expect(page).toHaveURL(new RegExp(`/${locale}`));
 });
}

test("locale switch preserves section and viewport offset",async({page})=>{
 await page.goto("/ru");
 await page.evaluate(()=>{document.documentElement.style.scrollBehavior="auto";const target=document.getElementById("format");if(target)scrollTo(0,target.getBoundingClientRect().top+scrollY+240)});
 const before=await page.locator("#format").evaluate(el=>el.getBoundingClientRect().top);
 await page.locator("header .languageSwitch button",{hasText:"EN"}).evaluate((button:HTMLButtonElement)=>button.click());
 await expect(page).toHaveURL(/\/en/);
 await page.waitForFunction(()=>!sessionStorage.getItem("ravenorth-locale-scroll"));
 const after=await page.locator("#format").evaluate(el=>el.getBoundingClientRect().top);
 expect(Math.abs(after-before)).toBeLessThan(90);
});

test("mobile layout has no horizontal overflow",async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const locale of ["ru","en"]){
  await page.goto(`/${locale}`);
  const dimensions=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth,headline:document.querySelector(".hero h1")?.getBoundingClientRect().right??0}));
  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport);
  expect(dimensions.headline).toBeLessThanOrEqual(dimensions.viewport+1);
 }
});

test("reduced motion renders the complete hero",async({page})=>{
 await page.emulateMedia({reducedMotion:"reduce"});
 await page.goto("/en");
 await expect(page.locator(".hero h1")).toContainText("NOT TOURS.");
 await expect(page.locator(".hero h1")).toContainText("EXPEDITIONS.");
});
