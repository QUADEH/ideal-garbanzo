const result = document.querySelector(".result");

document.querySelectorAll(".items button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const planet = event.target.textContent;
    buttonCounts[planet] = buttonCounts[planet] + 1;
    totalCount = totalCount + 1;
    result.innerHTML = `
      You pressed ${planet} ${buttonCounts[planet]} times.<br>
      You pressed a total of ${totalCount} times.
    `;
  });
});

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

//Create a variable for the Total Count
//Set the Total Count to 0
//When the user clicks, add to the Count
//Display the Count

let totalCount = 0;
function resetCounts() {
  // Clear out the message.
  result.innerHTML = "";
  totalCount = 0;

  // Reset all the button counts to 0.
  for (let key in buttonCounts) {
    buttonCounts[key] = 0;
  }
  
  
}
