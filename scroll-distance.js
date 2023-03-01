//get the element with id="scroll-marker"
const scrollTracker = document.getElementById("scroll-marker");

//get the "main" element
const main = document.querySelector('main');

//get the timeline element
const timeline = document.getElementsByClassName("timeline")

//get the height of the "main" element
const mainHeight = main.offsetHeight;

//get distance from "main" to top of root element
const offsetTop = main.offsetTop;

//get height of the timeline element
const timeHeight = timeline.offsetHeight;

// Update scroll-marker top offset value based on the current scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY - offsetTop < 0) {
    } else if (window.scrollY - offsetTop > 0) {
        scrollTracker.style.top = (window.scrollY - offsetTop) * (timeHeight / mainHeight) + "px";

    }
})
