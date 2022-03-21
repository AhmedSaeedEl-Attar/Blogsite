// Set elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went , make sure that ${selector} exists or is typed correctly.`
  );
};

// Nav actions on scrolls
const scrollHeader = () => {
  const HeaderElem = selectElement("#header");
  if (this.scrollY >= 15) {
    HeaderElem.classList.add("activated");
  } else {
    HeaderElem.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

//  open menu & search pop-up
const menuTogglebtn = selectElement("#menu-toggle-btn");
const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuTogglebtn.classList.toggle("activated");
};

menuTogglebtn.addEventListener("click", toggleMenu);

// Switch theme/add to local storage
const bodyElem = document.body;
const themeTogglebtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElem.classList.add("theme-light");
}

themeTogglebtn.addEventListener("click", () => {
  bodyElem.classList.toggle("theme-light");
  if (bodyElem.classList.contains("theme-light")) {
    localStorage.setItem("currentTheme", "ThemeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// search form popup
const searchBtn = selectElement("#search-btn");
const searchformcontainer = selectElement("#search-form-container");
const formclosebtn = selectElement("#form-close-btn");

searchBtn.addEventListener("click", () => {
  searchformcontainer.classList.add("activated");
});
formclosebtn.addEventListener("click", () => {
  searchformcontainer.classList.remove("activated");
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    searchformcontainer.classList.remove("activated");
  }
});

// Swiper
const swiper = new Swiper('.swiper' , {
  slidesPerView: 1,
  spaceBetweem:20 ,
  navigation: {
    nextEl : '.swiper-button-next' ,
    prevEl : '.swiper-button-prev'
  } ,
  pagination: {
    el: ' swiper-pagination'
  } ,
  breakpoints:{
    700 : {
      slidesPerView : 2 
    } ,
    800 : {
      slidesPerView : 3
    }
  }
})