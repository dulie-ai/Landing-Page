import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("renders the complete landing page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /make plans/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await expect(
    page.getByLabel("Preview of a conversation with Dulie"),
  ).toBeVisible();
  await expect(page.locator("main section")).toHaveCount(7);
  await expect(page.getByRole("contentinfo")).toBeAttached();
});

test("navigation reaches every section", async ({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
  }

  await page.getByRole("link", { name: "How it works", exact: true }).click();
  await expect(page.locator("#how-it-works")).toBeInViewport();
});

test("has no accidental horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));

  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test("has no serious accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();

  const seriousViolations = results.violations.filter(({ impact }) =>
    ["serious", "critical"].includes(impact),
  );
  expect(seriousViolations).toEqual([]);
});

test("switches between product examples", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Reminder" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Renew passport");
});

test("opens and closes the mobile menu without scrolling the page", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobile navigation behavior");
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("body")).toHaveClass(/menu-open/);
  await expect(
    page.getByRole("link", { name: "See it in action" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/menu-open/);
});
