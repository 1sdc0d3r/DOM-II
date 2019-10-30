//  mouseover mouseover mouseover keydown wheel drag / drop load focus resize scroll select dblclick

const navHead = document.querySelectorAll("nav a");
const busImg = document.querySelector(".intro img");
const introText = document.querySelector(".intro p");
const letsGo = document.querySelector(".text-content h2");
const funInSunText = document.querySelectorAll(".destination p");
const buttons = document.querySelectorAll(".content-pick .btn");
const body = document.querySelector("body");

console.log(navHead);
console.log(navHead[0]);

function getRandomColor() {
  var nums = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += nums[Math.floor(Math.random() * 16)];
  }
  return color;
}

navHead[0].addEventListener("click", function() {
  navHead[0].style.color = "red";
});

navHead[1].addEventListener("click", function() {
  navHead[1].style.color = "blue";
});
navHead[2].addEventListener("click", function() {
  navHead[2].style.color = "green";
});
navHead[3].addEventListener("click", function() {
  navHead[3].style.color = "orange";
});

busImg.addEventListener("click", function() {
  busImg.src = "../img/road.jpg";
});

introText.addEventListener("click", function() {
  introText.style.color = "skyblue";
  introText.textContent =
    "This is my new text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo dolor molestiae ipsum incidunt error aperiam ab doloribus quibusdam natus. Quas nihil possimus sint pariatur, molestiae obcaecati minus omnis accusamus.";
});

letsGo.addEventListener("click", function() {
  letsGo.style.textAlign = "center";
  letsGo.style.color = "purple";
});

funInSunText[0].addEventListener("click", function() {
  funInSunText[0].style.color = getRandomColor();
});

funInSunText[1].addEventListener("click", function() {
  funInSunText[1].style.display = "none";
});

buttons[0].addEventListener("click", function() {
  buttons[1].style.border = "4px dotted red";
});

buttons[1].addEventListener("click", function() {
  buttons[2].style.background = "red";
});

buttons[2].addEventListener("click", function() {
  body.style.color = getRandomColor();
  body.style.background = getRandomColor();
});
