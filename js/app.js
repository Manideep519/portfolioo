$(".menu__links").click((e) => {
  e.preventDefault();
});

// Magic mouse

options = {
  cursorOuter: "disable",
  hoverEffect: "pointer-overlay",
  hoverItemMove: true,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

// Locomotive scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smoothMobile: false,
  inertia: 0.4,
  repeat: true,
});

//links

const about = document.querySelector("#about");
const works = document.querySelector("#works");
const contact = document.querySelector("#contact");

$(".menu__links:nth-child(1)").on("click", function () {
  locoScroll.scrollTo("top");
});
$(".menu__links:nth-child(2)").on("click", function () {
  locoScroll.scrollTo(about);
});
$(".menu__links:nth-child(3)").on("click", function () {
  locoScroll.scrollTo(works);
});
$(".menu__links:nth-child(4)").on("click", function () {
  locoScroll.scrollTo(contact);
});

// GSAP Animations

let menuTimeLine = gsap.timeline({ defaults: { duration: 0.6 } });
menuTimeLine.from(".header__menu-overlay", { opacity: 0 }).from(".menu__links", {
  x: "100vw",
  stagger: 0.1,
  ease: "power2",
});
menuTimeLine.reverse(-1);
menuTimeLine.reversed(true);
$(".menu-icon").click(() => {
  $(".menu-icon , .logo").toggleClass("menu-open");
  menuTimeLine.reversed(!menuTimeLine.reversed());
});
$(".menu__links").click(() => {
  $(".menu-icon , .logo").toggleClass("menu-open");
  menuTimeLine.reversed(!menuTimeLine.reversed());
});
