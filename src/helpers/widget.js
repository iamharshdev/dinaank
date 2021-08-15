import { $create } from "./notJquery";

const svg_path = `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/>`;

export function appendWidget(parent_element) {
  const mainElem = $create("div", "_calender_dialog");
  const calender_wrapper = $create(
    "div",
    "_calender_wrapper _grid_center _calender_grid _grid_cols_1"
  );
  const wid_100 = $create("div", "_wid100");
  const _months_list = $create("ul", "_months_list _calender_display_hidden");
  const _calender_header = $create("div", "_calender_header _wid100");
  const _previous_month = $create("div", "_change_month _previous_month");
  _previous_month.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${svg_path}</svg>`;
  const _calender_grid = $create(
    "div",
    "_calender_grid _grid_cols_2 _mx_auto _grid_gap_2"
  );
  const _current_month = $create("div", "_current_month");
  const _current_year = $create("div", "_current_year");
  const _next_month = $create("div", "_change_month _next_month");
  _next_month.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg)" viewBox="0 0 512 512">${svg_path}</svg>`;
  const _years_list = $create("ul", "_years_list _calender_display_hidden");
  const empty = $create("div", "x__");
  const _week_Days = $create("div", "_week_Days");
  const _date_selectors = $create("div", "_date_selectors");
  const _main_date_wrapper = $create("div", "_main_date_wrapper");
  _main_date_wrapper.appendChild(_date_selectors);
  _calender_grid.appendChild(_current_month);
  _calender_grid.appendChild(_current_year);
  _calender_header.appendChild(_previous_month);
  _calender_header.appendChild(_calender_grid);
  _calender_header.appendChild(_next_month);
  wid_100.appendChild(_months_list);
  wid_100.appendChild(_calender_header);
  wid_100.appendChild(_years_list);
  empty.appendChild(_week_Days);
  empty.appendChild(_main_date_wrapper);
  calender_wrapper.appendChild(wid_100);
  calender_wrapper.appendChild(empty);
  mainElem.appendChild(calender_wrapper);
  parent_element.appendChild(mainElem);
}
