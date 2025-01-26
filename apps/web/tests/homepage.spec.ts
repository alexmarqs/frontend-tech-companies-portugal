import { expect, test } from "@playwright/test";

test.describe("Homepage e2e tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Check if all relevant elements are visible in the page", async ({
    page,
  }) => {
    // check if navbar is visible
    await expect(page.getByTestId("navbar")).toBeVisible();

    // check if companies header is visible
    await expect(page.getByTestId("companies-header")).toBeVisible();

    // check if companies list is visible
    await expect(page.getByTestId("companies-list")).toBeVisible();

    // check if there are more than 1 company items
    const companyItems = await page.getByTestId("company-item").all();
    expect(companyItems.length).toBeGreaterThan(1);

    // check if filters are visible and reset button is disabled
    await expect(
      page.getByRole("combobox", { name: "Category" }),
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Search term" }),
    ).toBeVisible();
    await expect(
      page.getByRole("combobox", { name: "Location" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Reset filters" }),
    ).toBeDisabled();

    // check if companies list footer is visible and has the correct text
    const companiesListFooter = page.getByTestId("companies-list-footer");
    await expect(companiesListFooter).toBeVisible();
    await expect(companiesListFooter.getByText("Page 1 of")).toBeVisible();
  });
});
