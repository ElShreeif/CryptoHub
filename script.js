// Menu
const navList = document.querySelector(".nav-fixed");
let menu = document.getElementById("menu");
const closeMenu = navList.querySelector("#close");

menu.onclick = () => {
 navList.classList.add("open");
 closeMenu.onclick = () => {
  navList.classList.remove("open");
 };
};
// Theme
const theme = document.querySelectorAll("#theme");
const currentMode = localStorage.getItem("currentMode");

theme.forEach((button) => {
 const icon = button.querySelector("i");
 if (currentMode) {
  document.body.classList.add(currentMode);
  if (currentMode === "dark") {
   icon.classList.replace("ri-moon-clear-fill", "ri-sun-fill");
  } else {
   icon.classList.replace("ri-sun-fill", "ri-moon-clear-fill");
  }
 } else {
  document.body.classList.add("light");
 }
 button.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
   document.body.classList.replace("light", "dark");
   theme.forEach((btn) => {
    const icon = btn.querySelector("i");
    icon.classList.replace("ri-moon-clear-fill", "ri-sun-fill");
   });
   localStorage.setItem("currentMode", "dark");
  } else {
   document.body.classList.replace("dark", "light");
   theme.forEach((btn) => {
    const icon = btn.querySelector("i");
    icon.classList.replace("ri-sun-fill", "ri-moon-clear-fill");
   });
   localStorage.setItem("currentMode", "light");
  }
 });
});
// Sign up & Log in
let btn = document.querySelectorAll("#btn");
let logIn = document.querySelector(".log-in");
let signIn = document.querySelector(".sign-up");
let sign = document.getElementById("signIn");
let log = document.getElementById("logIn");
let closeIt = document.querySelectorAll("#closeIt");

btn.forEach((button) => {
 button.onclick = () => {
  logIn.classList.add("show");
  document.body.classList.add("no-scroll");
 };
 closeIt.forEach((close) => {
  close.onclick = () => {
   logIn.classList.remove("show");
   signIn.classList.remove("active");
   document.body.classList.remove("no-scroll");
  };
 });
 sign.onclick = () => {
  signIn.classList.add("active");
  logIn.classList.remove("show");
 };
 log.onclick = () => {
  logIn.classList.add("show");
  signIn.classList.remove("active");
 };
});
// Prices
// Soon
// Wrong Msg
let wrongMsg = document.querySelector(".wrong-msg");
let msg = document.querySelectorAll("#Msg");

msg.forEach((button) => {
 button.addEventListener("click", () => {
  wrongMsg.classList.add("active");
  setTimeout(() => {
   wrongMsg.classList.remove("active");
  }, 3000);
 });
});
// Scroll To Up
let scroll2Top = document.querySelector(".scroll2Top");

window.addEventListener("scroll", () => {
 if (window.scrollY > 300) {
  scroll2Top.classList.add("active");
 } else {
  scroll2Top.classList.remove("active");
 }
});
