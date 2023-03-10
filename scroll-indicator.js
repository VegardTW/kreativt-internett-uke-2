// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    timelineScrollIndicator()
};
window.onload = function () {
    articleMarker("article-1", "mark-1")
    articleMarker("article-2", "mark-2")
    articleMarker("article-3", "mark-3")
    articleMarker("article-4", "mark-4")
    articleMarker("article-5", "mark-5")
    articleMarker("article-6", "mark-6")
    articleMarker("article-7", "mark-7")
    articleMarker("article-8", "mark-8")
    articleMarker("article-9", "mark-9")
    articleMarker("article-10", "mark-10")
    articleMarker("article-11", "mark-11")
    articleMarker("article-12", "mark-12")
}

function timelineDistance(position) {
    let positionOffset = position + document.documentElement.clientHeight;
    const topOffset = document.querySelector("main").offsetTop + document.documentElement.clientHeight;
    const docHeight = document.documentElement.offsetHeight;
    const timelineHeight = docHeight - topOffset

    return ((positionOffset - topOffset) / (timelineHeight)) * 100
}

function timelineScrollIndicator() {
    let windowScroll = document.documentElement.scrollTop;
    const scrollPercent = timelineDistance(windowScroll)
    if (scrollPercent < 0) {
        document.getElementById("scroll-marker").style.top = "0%";
    } else {
        document.getElementById("scroll-marker").style.top = scrollPercent + "%";
    }
}

function articleMarker(article, mark) {
    const articleElement = document.getElementById(article);
    const markElement = document.getElementById(mark);
    markElement.style.top = timelineDistance(articleElement.offsetTop) + "%"
}