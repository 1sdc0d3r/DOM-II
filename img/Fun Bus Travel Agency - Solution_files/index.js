//  mouseover mouseover mouseover keydown wheel drag / drop load focus resize scroll select dblclick

const navHead = document.querySelectorAll("nav a");
const busImg = document.querySelector(".intro img");
const introText = document.querySelector(".intro p");
const letsGo = document.querySelector(".text-content h2");
const funInSunText = document.querySelectorAll(".destination p");
const buttons = document.querySelectorAll(".content-pick .btn");
const body = document.querySelector("body");

const logoHead = document.querySelector(".logo-heading");

const navContainer = document.querySelector(".nav-container");

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

navContainer.addEventListener(
  "click",
  e => (navContainer.style.backgroundColor = "purple")
);

//! stopPropagation()
navHead[0].addEventListener("click", function(e) {
  navHead[0].style.color = "red";
  e.stopPropagation();
});

//! dblclick
navHead[0].addEventListener(
  "dblclick",
  () => (navHead[0].style.color = "green")
);
//! Resize
window.addEventListener("resize", function() {
  navHead[1].style.color = "blue";
});
//! mouseover
navHead[1].addEventListener(
  "mouseover",
  () => (navHead[1].style.color = "orange")
);
//! click
navHead[2].addEventListener("click", function() {
  navHead[2].style.color = "green";
});

navHead[2].addEventListener(
  "dblclick",
  () => (navHead[2].style.color = "brown")
);
//! scroll
window.addEventListener("scroll", function() {
  navHead[3].style.color = "orange";
});
//! mouseout
navHead[3].addEventListener(
  "mouseout",
  () => (navHead[3].style.color = "turquoise")
);

//! keydown
window.addEventListener("keydown", function() {
  busImg.src = "./img/road.jpg";
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
//! copy
window.addEventListener("copy", function() {
  funInSunText[0].style.color = getRandomColor();
});

funInSunText[1].addEventListener("click", function() {
  funInSunText[1].style.display = "none";
});
//! paste
window.addEventListener("paste", function() {
  buttons[1].style.border = "4px dotted red";
});

buttons[1].addEventListener("click", function() {
  buttons[2].style.background = "red";
});

buttons[2].addEventListener("click", function() {
  body.style.color = getRandomColor();
  body.style.background = getRandomColor();
});
//! mouseover
logoHead.addEventListener(
  "mouseover",
  () => (logoHead.style.fontSize = "5rem")
);

const link = "https://www.lambdaschool.com/";

const prevLinkFunc = () => navHead[0].removeAttribute("href");

//! preventDefault
// * navHead[0].addEventListener("click", e => e.preventDefault());

const giveLinkFunc = () => {
  navHead[0].setAttribute("href", link);
};

navHead[1].addEventListener("dblclick", () => prevLinkFunc());
navHead[2].addEventListener("dblclick", () => giveLinkFunc());
