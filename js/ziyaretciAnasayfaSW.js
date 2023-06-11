var counterContainer = document.querySelector(".website-counter-anasayfa-sw");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageHomeSW");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageHomeSW", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageHomeSW", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageHomeSW", 1);
  counterContainer.innerHTML = visitCount;
});