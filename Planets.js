function buttonPressed(buttonId) {
  buttonCounts[buttonId]++;
  document.getElementById("button-text").innerHTML = "You pressed " + buttonId + " " + buttonCounts[buttonId] + " times.";
}

let buttonCounts = {
  Mercury: 0,
  Venus: 0,
  Earth: 0,
  Mars: 0,
  Saturn: 0,
  Jupiter: 0,
  Uranus: 0,
  Neptune: 0
};