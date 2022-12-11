import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true,
};
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR],
})
export class DatePickerComponent implements ControlValueAccessor {
  public diabled = false;
  private onChangeCallback = (e: any) => {};
  private onTouchCallback = (e: any) => {};
  public date?: Date;

  constructor() {}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  writeValue(obj: any): void {
    this.date = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchCallback = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.diabled = isDisabled;
  }

  onChange(event: any) {
    this.onChangeCallback(event);
  }
}
