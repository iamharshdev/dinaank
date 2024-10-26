# 📅 Dinaank: Where Dates Dance in JavaScript/Typescript or maybe in your mind

Imagine a world where selecting dates isn't a chore, but a delightful dance of digits. Welcome to Dinaank, the featherweight champion of date pickers! Weighing in at a mere 4.9kb gzipped, this nimble library pirouettes through your code with zero dependencies.

## 🎭 A Calendar's Soliloquy

Dinaank doesn't just appear; it performs. With a flourish, a calendar materializes before your eyes. You, the director, simply point to a date, and the show concludes. Bravo! 👏

<div style="display: flex; justify-content: space-around;">
  <img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_4.png" width="30%">
  <img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_5.png" width="30%">
  <img src="https://raw.githubusercontent.com/iamharshdev/dinaank/master/screenshots/Screenshot_6.png" width="30%">
</div>

## 🎭 The Grand Entrance

### 🎟️ Via the Royal Decree (Manual Installation)

Summon Dinaank with a mere whisper in your HTML's head:

```html
<script src="https://unpkg.com/dinaank"></script>
```

### 🧙‍♂️ Through Mystical Incantations (npm/yarn)

```sh
npm install dinaank  # The npm spell
yarn add dinaank     # The yarn enchantment
```

## 🎨 Painting with Time

Dinaank is your canvas, and dates are your palette. Let's create a masterpiece:

```js
const timePainter = new Dinaank({
  el: '.canvas_of_time',
  onChange: (chosenMoment) => {
    console.log(`A moment in time was captured: ${chosenMoment}`);
  },
  theme: 'dark',  // For those who paint with starlight
  colors: {
    hover: 'cyan',    // The shimmer of possibility
    active: 'blue',   // The depth of decision
  },
  startYear: 1992,    // Begin your journey
  endYear: 2045,      // ...and where it might lead
  minDate: new Date('2024-01-01'), // Create a safe haven in the timestream
  maxDate: new Date('2024-12-31'), // ...and where it might lead
});
```

## 🌈 A Spectrum of Possibilities

Dinaank isn't just a date picker; it's a time traveler's toolkit:

- **🎨 Themes**: Light for sun-chasers, dark for night owls
- **📅 Custom Ranges**: Set the boundaries of your temporal playground
- **🎉 Events**: Mark the days that sparkle with significance
- **🔒 Min/Max Dates**: Create a safe haven in the timestream
- **🌍 Localization**: Speak the language of time in any tongue
- **↔️ Date Ranges**: For those who think in spans, not points

## 🎭 The Final Act

Dinaank is more than code; it's poetry in motion, a ballet of bytes. It turns the mundane act of choosing a date into a celebration of possibility.

So go forth, temporal artist! Paint your web pages with the brushstrokes of time itself. Let Dinaank be your muse, your stage, and your standing ovation.

---

<sub>Crafted with ❤️ and a sprinkle of stardust by Harsh Vardhan Goswami. Under the benevolent gaze of the MIT License.</sub>
