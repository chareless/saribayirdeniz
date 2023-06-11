var counterContainer = document.querySelector(".website-counter-oyunlar");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageOyunlar");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageOyunlar", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageOyunlar", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageOyunlar", 1);
  counterContainer.innerHTML = visitCount;
});