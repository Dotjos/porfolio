const projectOne = {
  imgSource: "./img/Multi-conf.jpg",
  projectTitle: "A MULTI STEP FORM",
  projectText:
    "The multi step form, as its name implies, is a web app that  guides you through numerous steps of filling out, deciding on, and picking different plans that fit and satisfy your needs.It's a challenge from frontend mentors.",
  liveLink: "https://multiple-conf.vercel.app/",
  gitHubRepo: "https://github.com/Dotjos/multiple-conf",
  techStack: ["HTML", "Tailwind CSS", "JavaScript"],
};

const projecTwo = {
  imgSource: "./img/Location.jpg",
  projectTitle: "IP ADDRESS GENERATOR",
  projectText:
    "This web app simplifies the task of retrieving your device's IP address and related network information,With just a click, you can access valuable data about your location and other related informations, whether you're using it for personal or professional reasons.",
  liveLink: "https://ip-adress-tracker-plum.vercel.app/",
  gitHubRepo: "https://github.com/Dotjos/IP-ADRESS-TRACKER",
  techStack: ["HTML", "Tailwind CSS", "JavaScript"],
};

const projectFour = {
  imgSource: "./img/Flag.jpg",
  projectTitle: "COUNTRICTIONARY",
  projectText:
    "This web app is designed for discovering fascinating facts and information about countries from around the world.This app makes it possible to  explore the globe, filter the various countries of the world by region , discover bordering nations among other features just by clicking on various visual buttons displayed on the screen.",
  liveLink: "https://rest-countries-api-five-pearl.vercel.app/",
  gitHubRepo: "https://github.com/Dotjos/rest-countries-api",
  techStack: ["HTML", "Tailwind CSS", "JavaScript"],
};

function modeToggle(btn, navBar, navTogg, togglBtn) {
  btn.forEach((img) => {
    img.addEventListener("click", () => {
      document.body.classList.toggle("bg-slate-900");
      navTogg.classList.toggle("bg-slate-900");
      document.body.classList.toggle("text-white");
      navBar.forEach((div) => {
        div.classList.toggle("bg-slate-800");
        div.classList.toggle("bg-slate-100");
      });
      togglBtn.forEach((btn) => {
        btn.classList.toggle("hidden");
      });
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

function projectUpdate(parentSect, project, isImagefirst) {
  const {
    imgSource,
    projectTitle,
    projectText,
    liveLink,
    gitHubRepo,
    techStack,
  } = project;

  // Create DOM elements
  const productDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const imgEl = document.createElement("img");
  const txtDiv = document.createElement("div");
  const txtNameDiv = document.createElement("div");
  const txtNameH1 = document.createElement("h1");
  const txtDescDiv = document.createElement("div");
  const txtDescPara = document.createElement("p");
  const txtLiveDiv = document.createElement("div");
  const txtLiveH1 = document.createElement("h1");
  const liveLinkEl = document.createElement("a");
  const txtGithubDiv = document.createElement("div");
  const txtGithubH1 = document.createElement("h1");
  const githubRepoLink = document.createElement("a");
  const txtStackDiv = document.createElement("div");
  const txtStackH1 = document.createElement("h1");

  // Set content and attributes
  imgEl.src = imgSource;
  imgEl.loading = "lazy";
  txtNameH1.textContent = projectTitle;
  txtDescPara.textContent = projectText;
  liveLinkEl.href = liveLink;
  githubRepoLink.href = gitHubRepo;

  txtLiveH1.innerHTML = `
    <h1><span class="font-medium">Live URL:</span><a class="text-blue-600 italic" href=${liveLink} target="_blank">liveURL.com</a></h1>
  `;

  txtGithubH1.innerHTML = `
    <h1><span class="font-medium">GitHub repo:</span><a class="text-blue-600 italic"  href=${gitHubRepo} target="_blank">Github.com</a></h1>
  `;

  const stackString = techStack.join();
  txtStackH1.innerHTML = `
    <h1><span class="font-medium">Tech stack:</span><span">${stackString}.</span></h1>
  `;

  // Add CSS classes
  productDiv.classList.add(
    "border",
    "p-3",
    "rounded-md",
    "border-slate-800",
    "border-2",
    "my-3",
    "lg:flex",
    "lg:justify-around",
    "project"
  );

  imgEl.classList.add("w-full");
  txtDescDiv.classList.add("my-3", "lg:my-0");

  if (isImagefirst) {
    imgDiv.classList.add(
      "h-64",
      "lg:h-96",
      "overflow-hidden",
      "lg:w-2/5",
      "lg:order-1"
    );
    txtDiv.classList.add(
      "mt-3",
      "lg:mt-0",
      "lg:w-2/5",
      "lg:text-xl",
      "lg:p-3",
      "lg:mt-auto",
      "lg:mb-auto",
      "lg:order-2"
    );
  } else {
    imgDiv.classList.add(
      "h-64",
      "lg:h-96",
      "overflow-hidden",
      "lg:w-2/5",
      "lg:order-2"
    );
    txtDiv.classList.add(
      "mt-3",
      "lg:mt-0",
      "lg:w-2/5",
      "lg:text-xl",
      "lg:p-3",
      "lg:mt-auto",
      "lg:mb-auto",
      "lg:order-1"
    );
  }

  txtNameH1.classList.add("font-semibold");

  // Append elements
  imgDiv.appendChild(imgEl);
  txtNameDiv.appendChild(txtNameH1);
  txtDescDiv.appendChild(txtDescPara);
  txtLiveDiv.appendChild(txtLiveH1);
  txtGithubDiv.appendChild(txtGithubH1);
  txtStackDiv.appendChild(txtStackH1);
  txtDiv.appendChild(txtNameDiv);
  txtDiv.appendChild(txtDescDiv);
  txtDiv.appendChild(txtLiveDiv);
  txtDiv.appendChild(txtGithubDiv);
  txtDiv.appendChild(txtStackDiv);

  productDiv.appendChild(imgDiv);
  productDiv.appendChild(txtDiv);

  parentSect.appendChild(productDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleModeBtn = document.querySelectorAll(".toggleBtn");
  const navBtn = document.querySelectorAll(".navB");
  const navTogg = document.querySelector(".navTogg");
  const dismissBtn = document.querySelector(".dismiss");
  const navDisp = document.querySelector(".navBar");
  const navLink = document.querySelectorAll(".navLink");
  const projectSect = document.querySelector("#projects");
  projectUpdate(projectSect, projectOne, false);
  projectUpdate(projectSect, projecTwo, true);
  projectUpdate(projectSect, projectFour, false);
  modeToggle(toggleModeBtn, navBtn, navTogg, toggleModeBtn);
  mobileNavToggle(dismissBtn, navDisp, navTogg);
  navScrollTo(navLink);
});

window.onload = function () {
  const projects = document.querySelectorAll(".project");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("fade-in", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });

  projects.forEach((project) => {
    observer.observe(project);
  });
};
