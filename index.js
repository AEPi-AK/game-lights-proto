const _ = require('lodash');
const ws281x = require('rpi-ws281x-native'); // tslint:disable-line

const numLights = 20;

function updateLights() {
  const pixelData = new Uint32Array(numLights);
  _.times(numLights, i => {
    // const light = this.lights.find(({ index }) => index === i);
    if (light) {
      pixelData[i] = 0xff0000;
    }
  });
  ws281x.render(pixelData);
}

ws281x.init(50, {
  // Use BCM Pin 12 (Pin #32, PWM0)
  // See here: https://github.com/jgarff/rpi_ws281x#gpio-usage
  gpioPin: 18,
  brightness: 64,
});
