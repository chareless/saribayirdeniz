var counterContainer = document.querySelector(".website-counter-instafollowers");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageInstaFollowers");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageInstaFollowers", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageInstaFollowers", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageInstaFollowers", 1);
  counterContainer.innerHTML = visitCount;
});