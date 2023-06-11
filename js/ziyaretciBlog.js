var counterContainer = document.querySelector(".website-counter-blog");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("pageBlog");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageBlog", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageBlog", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("pageBlog", 1);
  counterContainer.innerHTML = visitCount;
});