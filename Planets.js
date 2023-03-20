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
  let btnClear = document.querySelector(buttonCounts[buttonId]);
  let inputs = document.querySelectorAll('input');
  btnClear.addEventListener('click', () => {
      inputs.forEach(input =>  input.value = 0);
});
}
