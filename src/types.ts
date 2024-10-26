export interface DateSelectorOptions {
    el: string;
    canSelectRange?: boolean;
    closeOnSelect?: boolean;
    onChange?: (selectedDate: Date, rangeSelected: RangeSelected) => void;
    minDate?: Date;
    maxDate?: Date;
    theme?: 'light' | 'dark';
    colors?: {
      hover?: string;
      active?: string;
      range?: string;
      rangeColor?: string;
    };
    weekdays?: string[];
    months?: string[];
}

export interface RangeSelected {
    start: Date | null;
    end: Date | null;
}
