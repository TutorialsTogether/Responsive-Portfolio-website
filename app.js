let i = 0;
let images = [];
let time = 1200
let hamburgerMenu = document.querySelector(".hamburger-menu")
let navBar = document.querySelector(".header")
let links = document.querySelector("ul li a")
images[0] = 't-shirts/t-shirt (1).png'
images[1] = 't-shirts/t-shirt (2).png'
images[2] = 't-shirts/t-shirt (3).png'
images[3] = 't-shirts/t-shirt (4).png'
images[4] = 't-shirts/t-shirt (5).png'
images[5] = 't-shirts/t-shirt (6).png'
images[6] = 't-shirts/t-shirt (7).png'
images[7] = 't-shirts/t-shirt (8).png'
images[8] = 't-shirts/t-shirt (9).png'
images[9] = 't-shirts/t-shirt (10).png'
images[10] = 't-shirts/t-shirt (11).png'

function changeImg() {
    document.getElementById('slide').src = images[i];
    if(i < images.length - 1) {
        i++
    } else {
        i = 0
    }
}

function closeMenu() {
    navBar.classList.remove("open");
    document.body.classList.remove("stop-scrollin")
}
hamburgerMenu.addEventListener("click", () => {
    if (!navBar.classList.contains("open")) {
        navBar.classList.add("open");
        document.body.classList.add("stop-scrolling") 
    } else {
        closeMenu();
    }
});

window.onload = function() {
    setInterval(changeImg, time);
};
