
/*if (window.location !== window.parent.location) {
    window.parent.location.replace("");
}*/
function colorMode() {
  document.body.classList.toggle("colorMode");
}

/*function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}*/

function openNav() {
    document.getElementById("sidenav-div").style.width = "250px";
    document.getElementById("sidenav-back").classList.toggle("hidden")
}

function closeNav() {
    document.getElementById("sidenav-div").style.width = "0";
    document.getElementById("sidenav-back").classList.toggle("hidden")
}

/* Scroll to Top */
const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);
