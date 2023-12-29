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
