var counterContainer = document.querySelector(".website-counter-ss");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageSS");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageSS", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageSS", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageSS", 1);
  counterContainer.innerHTML = visitCount;
});