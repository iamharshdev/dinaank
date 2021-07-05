import { widget } from "./helpers/widget";
import { $, $attr, $class, $hasClass } from "./helpers/notJquery";
import "./style.css";

export class dateSelector {
  constructor(options) {
    // define some default options fallback
    const defaults = {
      startYear: null,
      endYear: null,
      el: "_date_picker_",
      monthName: true,
      fullMonthName: false,
      minDate: null,
      maxDate: null,
      onChange: null,
      theme: "dark",
      events: null,
      weekdays: [],
      dates: [],
      readOnlySelector: true,
      years: [],
      parent_element: null,
      colors: null,
      _date_picker: "._main_date_wrapper",
      _date_selector: "._date_selectors",
      months: [],
      _day_selected: new Date(),
    };

    // assign defaults as base and user selected options
    this.options = Object.assign({}, defaults, options);
    Object.assign(this, this.options);

    // add a new date method to check days in a month
    Date.prototype.monthDays = function () {
      var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
      return d.getDate();
    };

    /***
     * set default startYear and endYear to be based on date selected
     */

    this.startYear = this._current_year() - 50;
    this.endYear = this._current_year() + 50;

    // get parent to date input selector
    this.parent_element = $(`.${this.el}`)[0].parentElement;

    // populate selector with default date
    $(`.${this.el}`)[0].value = this._day_selected.toDateString();

    if (this.readOnlySelector) {
      $(`.${this.el}`)[0].setAttribute("readonly", true);
    }

    // generate dates of the month based on default date
    this.dates = this._generate_weeks_days_dates();

    // initialize the datepicker widget
    this._init();
  }
  /**
   * @param {Date} value
   */
  set select_new_date(value) {
    // set _day_selected value

    this._day_selected = value;

    this.dates = this._generate_weeks_days_dates();
    this._generate_calender_();
  }
  _init() {
    /* 
    
    this sets the default color scheme to calender dialog

    */

    this._set_color_theme();

    /* 
    
    Setup click listeners for calender elements
    
    */

    document.addEventListener("click", (e) => {
      // get element clicked
      const _elem_clicked = e.target;
      if ($hasClass(_elem_clicked, this.el)) {
        if ($("._calender_dialog")[0]) {
          $class($("._calender_dialog")[0], "_calender_display_hidden");
        } else {
          this._create_date_picker_dialog();
        }
      }

      // if month toggler clicked
      if ($hasClass(_elem_clicked, "_current_month")) {
        $("._years_list")[0].classList.add("_calender_display_hidden");
        $class($("._months_list")[0], "_calender_display_hidden");
      } else if ($hasClass(_elem_clicked, "_current_year")) {
        $("._months_list")[0].classList.add("_calender_display_hidden");
        $class($("._years_list")[0], "_calender_display_hidden");
      }

      // if any date clicked
      if ($hasClass(_elem_clicked, "_date_child")) {
        if (!$hasClass(_elem_clicked, "disabled")) {
          this.select_new_date = new Date($attr(_elem_clicked, "data"));
        }
      }

      // if new month selected
      if ($hasClass(_elem_clicked, "_month_child")) {
        if (!$hasClass(_elem_clicked, "disabled")) {
          this.select_new_date = new Date(
            this._day_selected.setMonth($attr(_elem_clicked, "data"))
          );
        }
      }

      // if year changed
      if ($hasClass(_elem_clicked, "_year_child")) {
        if (!$hasClass(_elem_clicked, "disabled")) {
          this.select_new_date = new Date(
            this._day_selected.setFullYear($attr(_elem_clicked, "data"))
          );
        }
      }

      // handle previous month button clicks
      if ($hasClass(_elem_clicked, "_previous_month")) {
        this.select_new_date = new Date(
          this._day_selected.setMonth(this._day_selected.getMonth() - 1)
        );
      }

      // handle next month button clicks
      if ($hasClass(_elem_clicked, "_next_month")) {
        this.select_new_date = new Date(
          this._day_selected.setMonth(this._day_selected.getMonth() + 1)
        );
      } else if (this._any_other_elem_clicked(_elem_clicked)) {
        /*

      if user clicked outside of calender pickup hide the calender picker
      this condition checks for item clicked class if it is any of widget class or not

      */
        $("._calender_dialog")[0].classList.add("_calender_display_hidden");
      }
    });
  }

  _any_other_elem_clicked(clicked) {
    /*
    
    list of all classes used in calender widget
    
    */
    const classes_defaults = [
      "_next_month",
      "_previous_month",
      "_year_child",
      "_month_child",
      "_date_child",
      "_calender_dialog",
      this.el,
      "_current_month",
      "_months_list",
      "_years_list",
      "_current_year",
    ];
    let _has = true;
    for (let index = 0; index < classes_defaults.length; index++) {
      const element = classes_defaults[index];
      if ($hasClass(clicked, element)) {
        _has = false;
        break;
      }
    }
    return _has;
  }
  _set_color_theme() {
    const r = $(":root")[0];
    r.style.setProperty(
      "--_bg_color",
      this.theme === "dark" ? "#3c414a" : "#f6f6f6"
    );
    r.style.setProperty(
      "--_calender_bg",
      this.theme === "dark" ? "#323741" : "#fefefe"
    );
    r.style.setProperty(
      "--_hover_bg",
      this.colors
        ? this.colors.hover
        : this.theme === "dark"
        ? "#2c437a"
        : "#ffab91"
    );
    r.style.setProperty(
      "--_active_bg",
      this.colors
        ? this.colors.active
        : this.theme === "dark"
        ? "#1f5eff"
        : "#f4511e"
    );
  }

  /**
   *
   * @returns dates of selected month arranged in weeks based arrays
   */
  _generate_weeks_days_dates() {
    const dates = this._generate_dates();
    const _week_dates = {};
    const filterArray = (_week_day) => {
      return dates.filter((date) => {
        return date.getDay() === _week_day;
      });
    };
    dates.forEach((item) => {
      _week_dates[item.getDay()] = filterArray(item.getDay());
    });
    return _week_dates;
  }

  /**
   *
   * @returns dates of month selected
   */
  _generate_dates() {
    const dates = [];
    const daysInMonth = this._daysInMonth();
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(
        new Date(this._current_year(), this._day_selected.getMonth(), i)
      );
    }
    return dates;
  }

  /**
   *
   * @returns days in selected month
   */
  _daysInMonth() {
    return new Date(
      this._current_year(),
      this._day_selected.getMonth()
    ).monthDays();
  }

  /**
   *
   * @returns list of weekdays in a month
   */

  _generate_weekdays() {
    const _weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return _weekdays;
  }

  /**
   *
   * @returns list of months in a year based on options passed
   */

  _generate_months() {
    let _months = [];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!this.months.length) {
      for (let i = 0; i < 12; i++) {
        /**
         * Checks for full month name option
         * Based on that push month to array
         */

        _months.push(
          this.monthName
            ? this.fullMonthName
              ? monthNames[i]
              : monthNames[i].slice(0, 3)
            : i + 1
        );
      }
    } else {
      _months = this.months;
    }

    return _months;
  }
  /**
   *
   * @returns list of years lies in b/w starYear and endYear passed in options
   */
  _generate_years() {
    const _years = [];
    for (let i = this.startYear; i <= this.endYear; i++) {
      _years.push(i);
    }
    return [..._years];
  }

  /**
   * this scrolls the year list to the year selected by user
   */

  _scroll_to_selected_year() {
    const _year_list = $("._years_list")[0];
    const _year_childs = _year_list.childNodes;
    _year_childs.forEach((year, index) => {
      const _date_year = $attr(year, "data");

      /**
       * get the year selected element
       */

      if (parseInt(_date_year) === this._day_selected.getFullYear()) {
        /**
         * Assign scrolltop = posY of currentYear.index - 6 to the list parent
         */
        _year_list.scrollTop =
          _year_childs[index - 6].getBoundingClientRect().y - 150;
      }
    });
  }

  /**
   *
   * @param {Date} _date
   * @returns date in YYYY-MM-DD format
   */

  _format_date_string(_date) {
    return `${_date.getFullYear() - _date.getMonth() - _date.getDate()}`;
  }

  /**
   *
   * @returns current user selected month
   */

  _current_month() {
    return this._generate_months()[this._day_selected.getMonth()];
  }

  /**
   *
   * @returns current user selected year
   */

  _current_year() {
    return this._day_selected.getFullYear();
  }

  /**
   * To set active date,year,month in the calender
   */

  _set_active_date() {
    /**
     * set active date
     */

    const _date_selector = $("._date_selectors")[0].childNodes;
    _date_selector.forEach((item) => {
      const _item_date = $attr(item, "data");
      if (
        this._format_date_string(new Date(_item_date)) ===
        this._format_date_string(this._day_selected)
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    /**
     * set active month
     */

    const _month_child = $("._month_child");
    _month_child.forEach((month) => {
      const _data_month = $attr(month, "data");
      if (parseInt(_data_month) === this._day_selected.getMonth()) {
        month.classList.add("active");
      } else {
        month.classList.remove("active");
      }
    });

    /**
     * set active year
     */

    const _year_child = $("._year_child");
    _year_child.forEach((year) => {
      const _date_year = $attr(year, "data");
      if (parseInt(_date_year) === this._day_selected.getFullYear()) {
        year.classList.add("active");
      } else {
        year.classList.remove("active");
      }
    });
  }

  /**
   *
   * @param {Date} _date_to_check
   * @param {string} type
   * @returns Is date lies between minimum and maximum date passed in options
   */
  _is_date_disabled(_date_to_check, type) {
    let minDate = this.minDate;
    let maxDate = this.maxDate;
    if (type === "month") {
      minDate = this.minDate ? this.minDate.getMonth() : null;
      maxDate = this.maxDate ? this.maxDate.getMonth() : null;
    } else if (type === "year") {
      minDate = this.minDate ? this.minDate.getFullYear() : null;
      maxDate = this.maxDate ? this.maxDate.getFullYear() : null;
    }
    if (minDate && !maxDate) {
      return _date_to_check >= minDate;
    } else if (!minDate && maxDate) {
      return _date_to_check <= maxDate;
    } else if (!minDate && !maxDate) {
      return true;
    } else if (minDate && maxDate) {
      return _date_to_check >= minDate && _date_to_check <= maxDate;
    }
  }

  /**
   *
   * @param {Date} _date_to_check
   * @returns checks for date has any event or not
   */

  _has_event(_date_to_check) {
    if (this.events) {
      return (
        _date_to_check >= this.events.start && _date_to_check <= this.events.end
      );
    } else {
      return false;
    }
  }

  /**
   * Add weeks as a list in the widget
   */

  _add_weeks_list() {
    /**
     * get week days list
     */

    if (this.weekdays.length === 0) {
      this.weekdays = this._generate_weekdays();
    }

    const _week_days_selector = $("._week_Days")[0];
    _week_days_selector.innerHTML = "";
    this.weekdays.forEach((element) => {
      _week_days_selector.innerHTML += `<span>${element}</span>`;
    });
    console.log(_week_days_selector);
  }

  /**
   * Add months as a list in the widget
   */

  _add_months_list() {
    /*
    get months list
    */
    this.months = this._generate_months();

    /*
    get ._months_list container div
    push months.
    Disable if month doesn't satisfy max and min date
    */

    const _month_selector = $("._months_list")[0];
    _month_selector.innerHTML = "";
    this.months.forEach((month, index) => {
      _month_selector.innerHTML += `
      <li class="_month_child" data="${index}">${month}</li>`;
    });
  }
  /**
   * Add years as a list in the widget
   */

  _add_years_list() {
    /*
    get years list based on startYear and endYear passed
    */

    this.years = this._generate_years();

    /*
    get years list container div
    push years based on max and min date.
    Disable if doesn't satisfy max and min date
    */

    const _year_selector = $("._years_list")[0];
    _year_selector.innerHTML = "";

    /*
    Iterate through all of the year element in years generated
    */

    this.years.forEach((item) => {
      _year_selector.innerHTML += `<li class="_year_child ${
        this._is_date_disabled(item, "year") ? "" : "disabled"
      }" data="${
        this._is_date_disabled(item, "year") ? item : null
      }">${item}</li>`;
    });
    this._scroll_to_selected_year();
  }

  /**
   * Generate month calender and display in widget
   */

  _generate_calender_() {
    /**
     *
     * throw date selected to onChange function
     */
    if (this.onChange != null) {
      this.onChange(this._day_selected);
    }

    /**
     * populate selector with date selected
     */

    $(`.${this.el}`)[0].value = this._day_selected.toDateString();

    // get dates container div
    const _date_picker = $(this._date_picker);
    const _date_selector = $(this._date_selector)[0];

    // show month selected to calender widget
    $("._current_month")[0].innerHTML = this._current_month();

    // show year selected to calender widget
    $("._current_year")[0].innerHTML = this._current_year();

    // arrange dates for calender
    _date_picker.forEach((item) => {
      _date_selector.innerHTML = ``;
      const _all_dates = Object.values(this.dates);
      let dateSelector = [];
      _all_dates.forEach((d) => {
        d.forEach((e) => {
          dateSelector.push(e);
        });
      });
      dateSelector.sort((a, b) => {
        return a - b;
      });
      for (let i = 0; i < Object.keys(this.dates).length; i++) {
        /*
        push first row of dates to calender
        starts from null ends with first date of the month
        */

        if (i === dateSelector[0].getDay()) {
          _date_selector.innerHTML += `<span class="_date_child ${
            this._is_date_disabled(dateSelector[0], "date") ? "" : "disabled"
          }" data="${
            this._is_date_disabled(dateSelector[0], "date")
              ? dateSelector[0]
              : null
          }">${dateSelector[0].getDate()} ${
            this._has_event(dateSelector[0])
              ? `<span class="_event"></span></span>`
              : ``
          } </span>`;
          break;
        } else {
          _date_selector.innerHTML += `<span class="_date_child disabled _calender_display_hidden"></span>`;
        }
      }

      // remove first date from dates list as it is already pushed to calender widget
      dateSelector = dateSelector.slice(1, dateSelector.length);

      // now iterate through remaining dates and push to calender widget
      dateSelector.forEach((item) => {
        // also check for min and max dates passed .
        // disable and enable based on min and max dates passed to the options
        _date_selector.innerHTML += `<span class="_date_child ${
          this._is_date_disabled(item, "date") ? "" : "disabled"
        }" data="${
          this._is_date_disabled(item, "date") ? item : null
        }">${item.getDate()}${
          this._has_event(item) ? `<span class="_event"></span></span>` : ``
        }</span>`;
      });
    });

    // set active date, month, year in calender widget
    setTimeout(() => {
      this._set_active_date();
    }, 100);
  }

  /**
   * This creates the calender widget and push it to DOM
   */
  _create_date_picker_dialog() {
    if ($("._calender_dialog")[0]) {
      $("._calender_dialog")[0].remove();
    }
    this.parent_element.innerHTML += widget();
    this._add_weeks_list();
    this._generate_calender_();
    this._add_months_list();
    this._add_years_list();
  }
}
