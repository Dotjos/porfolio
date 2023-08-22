function modeToggle(btn, navBar) {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("bg-slate-900");
    document.body.classList.toggle("text-white");
    navBar.forEach((div) => {
      div.classList.toggle("bg-slate-800");
      div.classList.toggle("bg-slate-100");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggleBtn");
  const navBar = document.querySelectorAll(".navB");

  modeToggle(toggleBtn, navBar);
});
