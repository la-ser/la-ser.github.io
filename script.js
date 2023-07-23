/* Scroll to Top */
const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("scroll", () => {
  const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// backToTopButton.addEventListener("click", goToTop);

var images = [
  "background/website.png",
  "background/2.png",
  "background/3.png",
  "background/4.png",
  "background/5.png",
  "background/6.png",
  "background/7.png",
  "background/8.png",
  "background/9.png",
  "background/10.png",
];
var currentIndex = 0;

function changeBackgroundImageForward() {
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
}
function changeBackgroundImageBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
}

// /* image hover */
// const luxury_district = document.getElementById("luxury-district");

// luxury_district.addEventListener("mouseover", function () {
//   setTimeout(function () {
//     document.body.classList.add("luxury-district");
//   }, 300);
// });

// luxury_district.addEventListener("mouseout", function () {
//   setTimeout(function () {
//     document.body.classList.remove("luxury-district");
//   }, 500);
// });

// /* subway */
// const subway_and_more = document.getElementById("subway-and-more");
// subway_and_more.addEventListener("mouseover", function () {
//   setTimeout(function () {
//     document.body.classList.add("subway-and-more");
//   }, 300);
// });

// subway_and_more.addEventListener("mouseout", function () {
//   setTimeout(function () {
//     document.body.classList.remove("subway-and-more");
//   }, 500);
// });

// /* new york */
// const little_new_york = document.getElementById("little-new-york");
// little_new_york.addEventListener("mouseover", function () {
//   setTimeout(function () {
//     document.body.classList.add("little-new-york");
//   }, 300);
// });

// little_new_york.addEventListener("mouseout", function () {
//   setTimeout(function () {
//     document.body.classList.remove("little-new-york");
//   }, 500);
// });

// /* cafe */
// const beach_and_cafe = document.getElementById("beach-and-cafe");
// beach_and_cafe.addEventListener("mouseover", function () {
//   setTimeout(function () {
//     document.body.classList.add("beach-and-cafe");
//   }, 300);
// });

// beach_and_cafe.addEventListener("mouseout", function () {
//   setTimeout(function () {
//     document.body.classList.remove("beach-and-cafe");
//   }, 500);
// });/* auto data version system */

const PRODUCTS_FILE_PATH = "data.json";

fetch(PRODUCTS_FILE_PATH)
  .then((response) => response.json())
  .then((version) => {
    const productHTML = version.map((version) => {
      return `
      <a id="${version.id}" class="hover-img" data-bg="./background/${version.bg}.png"
      href="${version.download}"><div id="version">
        <img class="icon" src="src/links/${version.icon}.png" alt="Icon">
        <span class="text">${version.name}</span>
        </div>
      </a>
            `;
    });

    const productList = document.getElementById("version-list");
    productList.innerHTML = productHTML.join("");
  })
  .catch((error) => console.error(error));

/*BG*/
const body = document.body;
const imageElements = document.querySelectorAll(".hover-img");
let currentImage = null;

imageElements.forEach(function (element) {
  const bg = element.getAttribute("data-bg");
  if (bg) {
    const img = new Image();
    img.src = bg;
  }
});

imageElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    const bg_pixelated = element.getAttribute("data-bg-pix");
    if (bg_pixelated == "true") {
      body.style.imageRendering = "pixelated";
    }

    const bg = element.getAttribute("data-bg");
    if (bg) {
      if (currentImage !== element) {
        currentImage = element;
        body.style.backgroundImage = `url('${bg}')`;
        body.classList.add("image-transition");
      }

      const bg_pixelated = element.getAttribute("data-bg-pix");
      if (bg_pixelated) {
      }
    }
  });

  element.addEventListener("mouseout", function (event) {
    const relatedTarget = event.relatedTarget;
    if (!relatedTarget || !relatedTarget.classList.contains("hover-img")) {
      body.style.backgroundImage = "";
      body.classList.remove("image-transition");
      currentImage = null;
    }
  });
});
