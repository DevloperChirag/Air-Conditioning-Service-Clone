var Demos = document.querySelectorAll(".Demos");
var Demo = document.querySelectorAll("#Demo");

for (let i = 0; i < Demos.length; i++) {
    Demos[i].addEventListener("mouseover", function () {
        Demo[i].style.display = "block";
    });
}

for (let i = 0; i < Demo.length; i++) {
    Demo[i].addEventListener("mouseover", function () {
        Demo[i].style.display = "block";
        // Demos[i].style.color = "#0057ff";
    });
}

for (let i = 0; i < Demo.length; i++) {
    Demo[i].addEventListener("mouseleave", function () {
        Demo[i].style.display = "none";
        // Demos[i].style.color = "slategray";
    });
}

for (let i = 0; i < Demos.length; i++) {
    Demos[i].addEventListener("mouseleave", function () {
        Demo[i].style.display = "none";
    });
}

var home = document.getElementsByClassName("home");
var lineHover = document.getElementsByClassName("line-hover");

for (let i = 0; i < home.length; i++) {
        home[i].addEventListener("mouseover", function () {
        lineHover[i].style.display = "block";
        lineHover[i].style.transition = "all linear 1s";
    });

        home[i].addEventListener("mouseleave", function () {
        lineHover[i].style.display = "none";
        lineHover[i].style.transition = "all linear 1s";
    });
}
