var counterContainer = document.querySelector(".website-counter-tombala");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageTombala");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageTombala", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageTombala", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageTombala", 1);
  counterContainer.innerHTML = visitCount;
});