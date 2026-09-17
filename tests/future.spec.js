import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/future/");
});

test("separates the working product from proposed planning", async ({
  page,
}) => {
  await expect(page).toHaveTitle(/A look ahead/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Make plans.Keep them.",
  );
  await expect(page.locator(".hero__proof")).toContainText(
    "Adaptive planning in development",
  );
  await expect(page.locator(".hero__proof")).toContainText(
    "Working Telegram prototype",
  );
  await expect(page.locator(".planner-toolbar")).toContainText(
    "Proposed MVP experience",
  );
  await expect(page.locator(".planner-toolbar")).toContainText(
    "NO CALENDAR CONNECTED",
  );
  for (const image of await page.locator(".brand-mark img").all()) {
    expect(await image.evaluate((i) => i.complete && i.naturalWidth > 0)).toBe(
      true,
    );
  }
  await expect(page.locator(".hero__actions a").first()).toHaveAttribute(
    "href",
    "https://t.me/dulie_bot",
  );
});

test("proposes, confirms and resets only the extra session", async ({
  page,
}) => {
  const session = page.locator(".slot--addition");
  const fixed = await page.locator(".slot--fixed").allTextContents();
  const deadline = await page.locator(".deadline-marker").textContent();
  const protectedTime = await page.locator(".protected-time").textContent();
  await expect(session).toBeHidden();
  await page.getByRole("button", { name: "Try “need another hour”" }).click();
  await expect(session).toBeVisible();
  await expect(session).toContainText("15:00–16:00");
  await expect(session).toContainText("Proposed · your approval");
  await expect(page.getByRole("status")).toContainText(
    "Nothing added until you approve",
  );
  await page.getByRole("button", { name: "Add session in demo" }).click();
  await expect(session).toContainText("Added in demo");
  await expect(page.getByRole("status")).toContainText("Thursday, 3–4pm");
  expect(await page.locator(".slot--fixed").allTextContents()).toEqual(fixed);
  await expect(page.locator(".deadline-marker")).toHaveText(deadline);
  await expect(page.locator(".protected-time")).toHaveText(protectedTime);
  await page.getByRole("button", { name: "Reset demo" }).click();
  await expect(session).toBeHidden();
  await page.getByRole("button", { name: "Try “need another hour”" }).click();
  await page.getByRole("button", { name: "Keep original plan" }).click();
  await expect(session).toBeHidden();
});

test("has accessible initial and proposed states", async ({ page }) => {
  for (const proposed of [false, true]) {
    if (proposed)
      await page
        .getByRole("button", { name: "Try “need another hour”" })
        .click();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  }
});

test("fits narrow screens and respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `No horizontal overflow at ${width}px`).toBe(false);
  }
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
});

test("keyboard users can open the FAQ and find policies", async ({ page }) => {
  const question = page
    .locator("summary")
    .filter({ hasText: "What if I don’t respond" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText(/Progress would remain unknown/)).toBeVisible();
  await page.getByRole("link", { name: "Privacy Policy", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy Policy",
  );
  await page.goto("/future/");
  await page
    .getByRole("link", { name: "Terms of Service", exact: true })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Terms of Service",
  );
});

test("keeps the original landing page separate", async ({ page }) => {
  await page.getByRole("link", { name: "Current product page" }).click();
  await expect(page.locator("main section")).toHaveCount(5);
  await expect(
    page.getByLabel("Telegram conversation with Dulie"),
  ).toBeVisible();
});

test("retains the original experience and current features", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(
    page.getByLabel("Telegram conversation with Dulie"),
  ).toBeVisible();
  await expect(page.locator(".hero__marquee")).toBeVisible();
  await expect(page.locator(".phrase-proof__examples code")).toHaveCount(3);
  await expect(page.locator("#how-it-works")).toContainText("morning brief");
  await expect(page.locator("#how-it-works")).toContainText("ten-minute Undo");
  await page.getByRole("tab", { name: "Repeat & batch" }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "event gym every mon 7-8pm",
  );
  await page.getByRole("tab", { name: "Edit & find" }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "reschedule event gym",
  );
  await page.getByRole("tab", { name: "Settings" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("/connect_google");
  await expect(page.locator("#build")).toBeAttached();
});
