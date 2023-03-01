// Get the element with id="scroll-marker"
let scrollTracker = document.getElementById("scroll-marker");

// Update its top offset value based on the current scroll position
scrollTracker.style.top = window.scrollY + "px";