function buttonPressed(buttonId) {
  buttonCounts[buttonId]++;
  document.getElementById("button-text").innerHTML = "You pressed " + buttonId + " You've clicked a total of " + buttonCounts[buttonId] + " times.";
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
  document.getElementById("Mercury").innerHTML = 0;
  document.getElementById("Venus").innerHTML = 0;
  document.getElementById("Earth").innerHTML = 0;
  document.getElementById("Mars").innerHTML = 0;
  document.getElementById("Saturn").innerHTML = 0;
  document.getElementById("Jupiter").innerHTML = 0;
  document.getElementById("Uranus").innerHTML = 0;
  document.getElementById("Neptune").innerHTML = 0;
}
