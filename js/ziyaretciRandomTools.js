var counterContainer = document.querySelector(".website-counter-randomtools");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageRandomTools");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageRandomTools", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageRandomTools", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageRandomTools", 1);
  counterContainer.innerHTML = visitCount;
});