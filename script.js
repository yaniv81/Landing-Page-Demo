const slides = [
  {
    id: "slider-hero",
    options: {
      autoplay: 3000,
      type: "carousel",
      startAt: 0,
      perView: 1,
      hoverpause: false,
    },
  },
  {
    id: "slider-middle",
    options: {
      autoplay: 3500,
      type: "carousel",
      startAt: 0,
      perView: 7,
      gap: 40,
      hoverpause: false,
      breakpoints: {
        1600: {
          perView: 5,
        },
        1200: {
          perView: 4,
        },
        800: {
          perView: 1,
        },
      },
    },
  },
  {
    id: "bottom-slider",
    options: {
      autoplay: 3000,
      type: "carousel",
      startAt: 0,
      perView: 5,
      focusAt: "center",
      hoverpause: false,
      breakpoints: {
        800: {
          perView: 3,
        },
      },
    },
  },
];

let sliderObj = {};
slides.forEach((slide, i) => {
  sliderObj[i] = new Glide(`#${slide["id"]}`, slide["options"]);
  sliderObj[i].mount();
});

const content = document.getElementById("header-wrapper");
document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;

  if (scrolled > position) {
    content.classList.add("fixed-header");
  } else {
    content.classList.remove("fixed-header");
  }
});
