function widget() {
  return `<div class="_calender_dialog"><div class="_calender_wrapper _grid_center _calender_grid _grid_cols_1"><div class="_wid100"><ul class="_months_list _calender_display_hidden"></ul><div class="_calender_header _wid100"><svg xmlns="http://www.w3.org/2000/svg" class="_change_month _previous_month" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg><div class="_calender_grid _grid_cols_2 _mx_auto _grid_gap_2"><div class="_current_month"></div><div class="_current_year"></div></div><svg xmlns="http://www.w3.org/2000/svg" class="_change_month _next_month" style="transform: rotate(180deg)" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg></div><ul class="_years_list _calender_display_hidden"></ul></div><div><div class="_week_Days"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div class="_date_selectors"></div></div></div><div class="_date_picker_dialog"><div class="_main_date_wrapper"><div class="_date_selectors"></div><div class="_month_selectors"></div><div class="_year_selectors"></div></div></div></div>`;
}
module.exports = {
  widget,
};