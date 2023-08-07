# Notes about 193

## What is this?

A React-three-fiber based webgame to challenge your geography knowledge! Given a 
country flag, choose the correct country outline from a set of four outlines. Get a streak of 193 to win.

![193 game thumbnail](src/assets/193-thumbnail.png)

A 60-second timer starts once ``play`` or the ``1`` key is pressed. If the correct outline is chosen on the first guess, your streak will increase by one and five seconds will be added to the timer. The timer will never exceed 60 seconds. 

Game stats include the following: wins, total guesses, correct guesses,
longest streak, best win time, and accuracy. These will be saved to your
browser's local storage by default (meaning that it will persist across
refreshes and browser restarts for a particular browser). You can also create
an account to save and load data on different devices.

193 countries are featured in total. If you believe a correction should be made, please reach out!

## Controls

- Press the ``play`` button or the ``1`` key to start. 
- Press the ``1`` key to pick the first (i.e., leftmost) country. To select the neighboring country to the right of the first one, press the ``2`` key, and so on.

## Known bugs

- Autocompleted login fields are not registered correctly by the server. For now, manually enter your email and password.

## TODO

- Implement a "forgotten password" feature.
- Implement Google and GitHub SSO.

## Running this project on your local machine

### Running the frontend

1. Clone this repo.
2. Run ```npm install``` to install dependencies.
3. Run ```vite```.

### Running the backend

- Modify the ```db.js``` and ```server.js``` files accordingly. 

## Attributions

Country outlines (SVGs) were [adapted from Etsy](https://www.etsy.com/listing/1174609901/individual-world-countries-maps-svg) and converted to 3D models using Blender and ``gltfjsx``.

Country flags were also [sourced from Etsy](https://www.etsy.com/listing/1031888560/world-country-flags-svg-countries-flag?click_key=c3999de33423f70003e07de1ea496f59c391c6c5%3A1031888560&click_sum=78fbd197&ref=shop_home_feat_2&pro=1&sts=1).

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)