function modeToggle(btn, navBar, navTogg) {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("bg-slate-900");
    navTogg.classList.toggle("bg-slate-900");
    document.body.classList.toggle("text-white");
    navBar.forEach((div) => {
      div.classList.toggle("bg-slate-800");
      div.classList.toggle("bg-slate-100");
    });
  });
}

function mobileNavToggle(symbol, btnTogggle, nav) {
  btnTogggle.addEventListener("click", () => {
    nav.classList.remove("hidden");
  });
  symbol.addEventListener("click", () => {
    nav.classList.add("hidden");
  });
}

function navScrollTo(links) {
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        // Use the scrollTo API for smooth scrolling
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleModeBtn = document.querySelector(".toggleBtn");
  const navBtn = document.querySelectorAll(".navB");
  const navTogg = document.querySelector(".navTogg");
  const dismissBtn = document.querySelector(".dismiss");
  const navDisp = document.querySelector(".navBar");
  const navLink = document.querySelectorAll(".navLink");
  modeToggle(toggleModeBtn, navBtn, navTogg);
  mobileNavToggle(dismissBtn, navDisp, navTogg);
  navScrollTo(navLink);
});
