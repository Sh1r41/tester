document.getElementById("nav-button").addEventListener("click", function(event) {
    let element1 = document.getElementById("nav-menu");
    let element2 = document.getElementById("nav-button");

    element1.style.opacity = element1.style.opacity === "0" ? "1" : "0";
    element1.style.visibility = element1.style.visibility === "hidden" ? "visible" : "hidden";

    element2.style.backgroundColor = element2.style.backgroundColor === "rgba(27, 30, 34, 0.5)" ? "rgb(35, 40, 45)" : "rgba(27, 30, 34, 0.5)"
});