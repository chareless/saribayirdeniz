var counterContainer = document.querySelector(".website-counter-anasayfa-eng");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageHomeEng");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageHomeEng", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageHomeEng", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageHomeEng", 1);
  counterContainer.innerHTML = visitCount;
});