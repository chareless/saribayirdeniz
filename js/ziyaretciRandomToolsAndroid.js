var counterContainer = document.querySelector(".website-counter-randomtoolsandroid");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageRandomToolsAndroid");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageRandomToolsAndroid", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageRandomToolsAndroid", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageRandomToolsAndroid", 1);
  counterContainer.innerHTML = visitCount;
});