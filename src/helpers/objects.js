const defaults = () => {
  return {
    startYear: new Date().getFullYear() - 50,
    endYear: new Date().getFullYear() + 50,
    el: "_date_picker_",
    monthName: true,
    fullMonthName: false,
    minDate: null,
    maxDate: null,
    onChange: null,
    theme: "light",
    canSelectRange: false,
    events: null,
    weekdays: [],
    dates: [],
    supportSelector: null,
    readOnlySelector: false,
    years: [],
    parent_element: null,
    colors: null,
    rangeSelected: {
      start: null,
      end: null,
    },
    _date_picker: "._main_date_wrapper",
    _date_selector: "._date_selectors",
    months: [],
    _day_selected: new Date(),
    closeOnSelect: true,
  };
};

export { defaults };
