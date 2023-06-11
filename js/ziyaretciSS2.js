var counterContainer = document.querySelector(".website-counter-ss2");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageSS2");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageSS2", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageSS2", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageSS2", 1);
  counterContainer.innerHTML = visitCount;
});