var counterContainer = document.querySelector(".website-counter-arduino");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageArduino");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageArduino", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageArduino", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageArduino", 1);
  counterContainer.innerHTML = visitCount;
});