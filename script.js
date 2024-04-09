// import { profileshow } from "./login/index.js";

//nav bar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.add("scroll-on");
  }
};

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navcollapse.classList.remove("show");
  });
});
//counter
function shownumber() {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1500, 3000);
  counter("count2", 0, 1000, 2000);
  counter("count3", 0, 2000, 1000);
  counter("count4", 0, 1000, 3000);
}
shownumber();
// login
const modal_signin = document.querySelector("#modal-signin");
const modal_login = document.querySelector("#modal-login");
const loginuser = localStorage.getItem("loginuser");
if (loginuser === null) {
  setTimeout(() => {
    modal_login.style.display = "flex";
  }, 3000);
} else {
  let loginbtn = document.getElementById("loginbtn");
  loginbtn.style.display = "none";
  const profilebtnmain = document.querySelector(".dropdown");
  profilebtnmain.style.display = "block";
  console.log(loginuser);
  const show_user_in_profile = document.getElementById("useremail");
  show_user_in_profile.innerText = loginuser;
}

function loginshow() {
  modal_login.style.display = "flex";
}
function signinshow(ev) {
  modal_signin.style.display = "flex";
  modal_login.style.display = "none";
}
function cancelclick() {
  const errorElementsP = document.querySelectorAll("p.error");
  errorElementsP.forEach((element) => {
    element.innerHTML = "";
  });

  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.classList.remove("error");
  });

  modal_signin.style.display = "none";
  modal_login.style.display = "none";
}
// show profile btn
function showprofile() {
  const profilebtn = document.querySelector(".dropdown-menu");
  profilebtn.style.display =
    profilebtn.style.display === "block" ? "none" : "block";
}
function showuseremail() {
  const useremail = document.getElementById("useremail");
}
//logout
function Onlogout() {
  localStorage.removeItem("loginuser");
  location.reload();
}
//show food items
function showfooditempage() {
  console.log("btn");
  debugger;
  if (loginuser !== null) {
    window.location.href = "./fooditem/index.html";
  } else {
    alert("you can not order without login page!!.please login");
  }
}
