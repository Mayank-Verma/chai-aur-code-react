const container = document.querySelector(".navbar");
const body = document.querySelector("body");
container.addEventListener("click", function (e) {
  console.log(e.target.value);
  body.style.background = e.target.value;
});
