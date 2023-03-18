function buttonPressed(buttonId) {
  buttonCounts[buttonId]++;
  document.getElementById("button-text").innerHTML = "You pressed " + buttonId + "You've clicked a total of" + buttonCounts[buttonId] + " times.";
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

function resetCounts() {
  buttonCounts.Mercury = 0;
  buttonCounts.Venus = 0;
  buttonCounts.Earth = 0;
  buttonCounts.Mars = 0;
  buttonCounts.Saturn = 0;
  buttonCounts.Jupiter = 0;
  buttonCounts.Uranus = 0;
  buttonCounts.Neptune = 0;
  document.getElementById("Mercury-text").innerHTML = "";
  document.getElementById("Venus-text").innerHTML = "";
  document.getElementById("Earth-text").innerHTML = "";
  document.getElementById("Mar-text").innerHTML = "";
  document.getElementById("Saturn-text").innerHTML = "";
  document.getElementById("Jupiter-text").innerHTML = "";
  document.getElementById("Uranus-text").innerHTML = "";
  document.getElementById("Neptune-text").innerHTML = "";
}
