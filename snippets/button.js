setWatch(function () {
  console.log("Pressed");
}, BTN, { edge: "rising", debounce: 50, repeat: true });

setWatch(function () {
  console.log("Released");
}, BTN, { edge: "falling", debounce: 50, repeat: true });