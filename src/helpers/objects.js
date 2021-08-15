const defaults = () => {
    return {
        startYear: null,
        endYear: null,
        el: "_date_picker_",
        monthName: true,
        fullMonthName: false,
        minDate: null,
        maxDate: null,
        onChange: null,
        theme: "dark",
        canSelectRange: false,
        events: null,
        weekdays: [],
        dates: [],
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
    }
}

export {
    defaults
}