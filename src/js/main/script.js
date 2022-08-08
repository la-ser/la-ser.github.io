function colorMode() {
    document.body.classList.toggle("colorMode")
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function openNav() {
    document.getElementById("sidenav-div").style.width = "250px";
    document.getElementById("sidenav-back").classList.remove("hidden")
}

function closeNav() {
    document.getElementById("sidenav-div").style.width = "0";
    document.getElementById("sidenav-back").classList.add("hidden")
}
