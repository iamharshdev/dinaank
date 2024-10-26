import DateSelector from "../main";

describe("DateSelector", () => {
  let dateSelector: DateSelector;

  beforeEach(() => {
    document.body.innerHTML = '<input class="date-input" />';
    console.log(
      "File name: src/__tests__/DateSelector.test.ts, 🔍🧪, line 8, function: beforeEach, variable: document.body.innerHTML, value:",
      document.body.innerHTML
    );
    dateSelector = new DateSelector({ el: ".date-input" });
  });

  afterEach(() => {
    dateSelector.destroy();
  });

  test("should initialize with default options", () => {
    expect(dateSelector).toBeDefined();
  });

  test("should support multiple instances", () => {
    document.body.innerHTML += '<input class="date-input-2" />';
    const dateSelector2 = new DateSelector({ el: ".date-input-2" });

    expect(dateSelector["id"]).not.toBe(dateSelector2["id"]);
  });

  test("should destroy the instance", () => {
    dateSelector.destroy();
  });

  test("should set min and max date", () => {
    dateSelector.setMinMaxDate(new Date("2024-01-01"), new Date("2024-01-31"));
    expect(
      dateSelector["dom"].calendarDialog.classList.contains(
        "_calender_display_hidden"
      )
    ).toBe(true);
  });

  test("should set theme", () => {
    dateSelector.setTheme("dark");

    // Check for CSS custom properties (variables)
    const rootElement = document.documentElement;
    expect(rootElement.style.getPropertyValue("--_bg_color")).toBe("#3c414a");
    expect(rootElement.style.getPropertyValue("--_calender_bg")).toBe(
      "#323741"
    );
    expect(rootElement.style.getPropertyValue("--_font_color")).toBe("#767c8c");
    expect(rootElement.style.getPropertyValue("--_active_bg")).toBe("#1f5eff");
    expect(rootElement.style.getPropertyValue("--_hover_bg")).toBe("#2c437a");

    dateSelector.setTheme("light");

    expect(rootElement.style.getPropertyValue("--_bg_color")).toBe(
      "rgb(245, 245, 245)"
    );
    expect(rootElement.style.getPropertyValue("--_calender_bg")).toBe(
      "rgb(245, 245, 245)"
    );
    expect(rootElement.style.getPropertyValue("--_font_color")).toBe("#333333");
    expect(rootElement.style.getPropertyValue("--_active_bg")).toBe("#f4511e");
    expect(rootElement.style.getPropertyValue("--_hover_bg")).toBe("#ffab91");

    console.log(
      "File name: src/__tests__/DateSelector.test.ts, 🎨🔍, line 52, test: should set theme, variable: rootElement.style, value:",
      rootElement.style
    );
  });
  // Add more tests for different scenarios and edge cases
});
