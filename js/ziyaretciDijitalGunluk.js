var counterContainer = document.querySelector(".website-counter-dijitalgunluk");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageDijitalGunluk");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageDijitalGunluk", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageDijitalGunluk", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageDijitalGunluk", 1);
  counterContainer.innerHTML = visitCount;
});