var counterContainer = document.querySelector(".website-counter-anasayfa");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageHome");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageHome", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageHome", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageHome", 1);
  counterContainer.innerHTML = visitCount;
});