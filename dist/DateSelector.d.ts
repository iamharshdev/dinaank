import { DateSelectorOptions } from "./types";
export declare class DateSelector {
    id: string;
    options: DateSelectorOptions;
    private dom;
    private _daySelected;
    private rangeSelected;
    private dates;
    private selectionMode;
    constructor(options: Partial<DateSelectorOptions>);
    setMinMaxDate(minDate: Date, maxDate: Date): void;
    setTheme(theme: "dark" | "light"): void;
    private _initializeState;
    private _initializeDOM;
    private _attachEventListeners;
    private _handleDateClick;
    private _handleRangeSelection;
    private _handleMonthChange;
    private _handleYearChange;
    private _handleOutsideClick;
    private _updateCalendar;
    private _triggerOnChange;
    private _generateWeeksDaysDates;
    destroy(): void;
    private _setColorTheme;
}
