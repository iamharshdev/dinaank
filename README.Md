# dinaank

Select a date with JavaScript, but that's not the only thing you can do with it. Dinaank has no dependencies and weighs in at 4.9kb gzipped! Dinaank is simple to use and looks clean and minimal. A calendar pops up and you pick a date. That's it.

<ul style="list-style-type:none;display:flex;">
  <li><img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_4.png"></li>
  <li><img src=".https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_5.png"></li>
  <li><img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_6.png"></li>
</ul>

## Installation

### Manually

Simply include dinaank.js cdn url in the head

```html
<script src="dinaank.js"></script>

<!-- Or remotely via Unpkg CDN -->

<script src="https://unpkg.com/dinaank"></script>
```

If you have downloaded the package via zip file from Github, these files are located in the dist folder. Otherwise, you can use the Unpkg CDN as shown in the examples above.

### Via npm/yarn

```sh
# using npn
npm install dinaank

# using yarn
yarn add dinaank
```

## Basic Usage

Importing the library if you're using it in Node:

```js
const dinaank = require("dinaank");
```

Using in code

```js
/*
 * Selector can only be inform of class name without '.' or '#'
 * options is object of options see options section for more information.
 */
new dinaank.dateSelector({
  el: selector,
  options,
});
```

## Options - Event Callbacks

Use these options if you want to fire off your own functions after something happens with the calendar.

### onChange

Callback function after a date is selected or changed by the user. It has one argument and that is date use it the way you like it.

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  onChange: (date) => {
    // do stuff with the selected date on the calender
  },
});
```

## Options - customization

**Colors/Mode**
<br>
Define calender colors and mode.

<img src=".https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_4.png">
<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_7.png">

### **Custom color**

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_11.png">

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  theme: "dark", // default theme is dark. Use dark or light
  colors: {
    hover: "cyan", // default colors dark: #2c437a , light: #ffab91
    active: "blue", // default colors dark: #1f5eff , light: #f4511e
  },
});
```

**startYear,**
**endYear**
<br>
You can customize the list of years start year, not only start year you can also customize the list end year. See example below.

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  startYear: 1992, // default currentYear - 80
  endYear: 2045, // default currentYear + 40
});
```

**Events**
<br>
An range of dates which indicate something is happening - a meeting, birthday, etc. I.e. an event.

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_9.png">

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  events: {
    start: new Date(2020, 10, 1),
    end: new Date(2021, 1, 1),
  }, // defaults to null
});
```

**Date Selected**

This will start the calender with a date already selected.

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_7.png">

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  _day_selected: new Date(2099, 10, 1),
  // defaults to new Date() i.e. today's date
});
```

**minDate**

This will be the minumum threshold of selectable dates. Anything prior will be unselectable.

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_10.png">

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  minDate: new Date(2099, 10, 1), // defaults to null
});
```

**maxDate**

This will be the maximum threshold of selectable dates. Anything after it will be unselectable.

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  maxDate: new Date(2099, 10, 1), // defaults to null
});
```

**minDate and maxDate can also be used together**

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_10.png">

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  minDate: new Date(2021, 10, 1), // defaults to null
  maxDate: new Date(2099, 10, 1), // defaults to null
});
```

**months**

You can customize the display of the months name at the top of the calender widget by providing an array of 12 strings in the order written below:

<img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/custom_months.png">

```js
const picker = new dinaank.dateSelector({
  months: [
    "😀",
    "😂",
    "😎",
    "😍",
    "🤩",
    "😜",
    "😬",
    "😳",
    "🤪",
    "🤓 ",
    "😝",
    "😮",
  ],
  // default [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
});
```

**week days**

You can customize the display of the week days at the top of the calender widget by providing an array of 7 strings in the order written below:

```js
const picker = new dinaank.dateSelector({
  weekdays: ["😌", "🥶", "😌", "😐", "😝", "🤧", "😍"],
  // default ["Su","Mo","Tu","We","Th","Fr","Sa"]
});
```

**readOnlySelector**

This will make input selector readonly means user won't be able to type anything thus preventing invalid dates entered by user.

```js
const picker = new dinaank.dateSelector({
  el: "_date_picker",
  readOnlySelector: false, // defaults to true
});
```

**MIT License**

Copyright (c) 2021 Harsh Vardhan Goswami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
