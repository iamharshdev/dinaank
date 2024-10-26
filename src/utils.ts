import { DateSelectorOptions } from './types';

export function generateUniqueId(): string {
  return `date-selector-${Math.random().toString(36).substr(2, 9)}`;
}

export function toIntDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function defaults(): DateSelectorOptions {
  return {
    el: '',
    canSelectRange: false,
    closeOnSelect: true,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'],
    theme: 'light',
  };
}