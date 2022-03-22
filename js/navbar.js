function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("navbar").style.zIndex = "999";
    dissapearHamburger()
}

function dissapearHamburger() {
    document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("hamburger").style.display = "block";
}