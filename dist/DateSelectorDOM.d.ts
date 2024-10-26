import { DateSelector } from "./DateSelector";
import { RangeSelected } from "./types";
export declare class DateSelectorDOM {
    private dateSelector;
    private inputElement;
    private parentElement;
    calendarDialog: HTMLDivElement;
    private yearsListView;
    constructor(dateSelector: DateSelector);
    createCalendarDialog(): void;
    updateCalendar(dates: Record<number, Date[]>, selectedDate: Date, rangeSelected: RangeSelected): void;
    attachEventListeners(handlers: {
        onDateClick: (date: Date) => void;
        onMonthChange: (change: number) => void;
        onYearChange: (year: number) => void;
        onOutsideClick: (event: MouseEvent) => void;
    }): void;
    toggleCalendar(): void;
    hideCalendar(): void;
    isPartOfCalendar(element: HTMLElement): boolean;
    destroy(): void;
    private removeEventListeners;
    private _generateCalendarHTML;
    private _generateWeekDaysHTML;
    private _getMonthName;
    private _isDateSelected;
    private _isDateInRange;
    private _updateInputValue;
    private _generateYearsListView;
    private _toggleYearsListView;
}
