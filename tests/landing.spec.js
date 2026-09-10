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
    page.getByLabel("Telegram conversation with Dulie"),
  ).toBeVisible();
  await expect(page.locator("main section")).toHaveCount(5);
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

test("shows multiple phrasings for the same event", async ({ page }) => {
  await page.goto("/");
  const alternatives = page.locator(".phrase-proof__examples code");

  await expect(alternatives).toHaveCount(3);
  await expect(alternatives.nth(0)).toContainText("event gym tmr 7-8");
  await expect(alternatives.nth(2)).toContainText("add an event for gym");
});

test("phone mockup shows a compact action history", async ({ page }) => {
  await page.goto("/");
  const phone = page.locator(".phone");

  await expect(phone.locator(".chat-exchange")).toHaveCount(3);
  await expect(phone).toContainText("task buy milk");
  await expect(phone).toContainText("delete event gym");
  await expect(phone).toContainText("Undo");
  const fits = await phone.locator(".chat-body").evaluate((body) => {
    const bounds = body.getBoundingClientRect();
    return [...body.querySelectorAll(".chat-exchange")].every((exchange) => {
      const message = exchange.getBoundingClientRect();
      return message.top >= bounds.top && message.bottom <= bounds.bottom;
    });
  });
  expect(fits).toBe(true);
});

test("groups the benefits into three illustrated cards", async ({ page }) => {
  await page.goto("/");
  const core = page.locator("#how-it-works");
  await expect(core.getByRole("heading", { level: 3 })).toHaveCount(3);
  await expect(core).toContainText("morning brief");
  await expect(core).toContainText("automatic event colors");
  await expect(core).toContainText("ten-minute Undo");
});

test("shows every command category", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("tab", { name: "Repeat & batch" }).click();
  await expect(
    page.getByRole("tabpanel", { name: "Repeat & batch" }),
  ).toContainText("event gym every mon 7-8pm");

  await page.getByRole("tab", { name: "Edit & find" }).click();
  await expect(
    page.getByRole("tabpanel", { name: "Edit & find" }),
  ).toContainText("reschedule event gym");

  await page.getByRole("tab", { name: "Settings" }).click();

  await expect(page.getByRole("tabpanel", { name: "Settings" })).toContainText(
    "/connect_google",
  );
  await expect(page.getByRole("tabpanel", { name: "Settings" })).toContainText(
    "/set_timezone Singapore",
  );
});

test("renders a level, visible marquee", async ({ page }) => {
  await page.goto("/");
  const marquee = page.locator(".hero__marquee");
  const box = await marquee.boundingBox();

  expect(box?.height).toBeGreaterThanOrEqual(40);
  await expect(marquee.getByText("REMEMBER IT").first()).toBeVisible();
});

test("uses the live Telegram bot link", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /Try Dulie on Telegram/i }),
  ).toHaveAttribute("href", "https://t.me/dulie_bot");
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
