const sections = document.querySelectorAll("section"); // sections with ids
const navLinks = document.querySelectorAll("nav a");
const scrollableColumn= document.querySelector(".scrollable")
const cursorRing = document.getElementById('cursor-ring');


//scroll of the scrollable right secrion of the page
function redirectScroll(e) {
  // Only apply custom scroll on desktop screens
  if (window.innerWidth < 1024) return;

  if (e.type === "wheel") {
    e.preventDefault(); // block body scroll
    // Smooth wheel scrolling
    scrollableColumn.scrollBy({
      top: e.deltaY,
      behavior: "smooth"
    });
  }
}

// Attach wheel listener
window.addEventListener("wheel", redirectScroll, { passive: false });

// --------------------
// Continuous key scroll
// --------------------
let scrolling = false;
let scrollDirection = 0;
let scrollSpeed = 20; // px per frame, tweak to taste

function step() {
  if (scrolling && scrollDirection !== 0) {
    scrollableColumn.scrollBy({ top: scrollDirection * scrollSpeed, behavior: "auto" });
    requestAnimationFrame(step);
  }
}

window.addEventListener("keydown", (e) => {
  if (window.innerWidth < 1024) return;  
  if (scrolling) return; // already scrolling

  switch (e.key) {
    case "ArrowDown":
    case "PageDown":
      e.preventDefault();
      scrollDirection = 1;
      scrolling = true;
      requestAnimationFrame(step);
      break;

    case "ArrowUp":
    case "PageUp":
      e.preventDefault();
      scrollDirection = -1;
      scrolling = true;
      requestAnimationFrame(step);
      break;

    case "Home":
      e.preventDefault();
      scrollableColumn.scrollTo({ top: 0, behavior: "smooth" });
      break;

    case "End":
      e.preventDefault();
      scrollableColumn.scrollTo({ top: scrollableColumn.scrollHeight, behavior: "smooth" });
      break;
  }
});

window.addEventListener("keyup", (e) => {
  if (["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(e.key)) {
    scrolling = false;
    scrollDirection = 0;
  }
});


// Adding the cursor-ring following effect
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

const ringRect = window.getComputedStyle(cursorRing);
const ringSize = parseInt(ringRect.width);
const ringOffset = ringSize / 2;

document.addEventListener('mousemove', (e) => {
  cursorRing.style.left = (e.clientX - ringOffset) + "px";
  cursorRing.style.top = (e.clientY - ringOffset) + "px";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`a[href="#${id}"]`);

      if (entry.isIntersecting && link) {
        // reset all links
        navLinks.forEach((a) => {
          const line = a.querySelector(".line");
          a.classList.remove("text-slate-800","dark:text-slate-100")
            link.classList.add("text-slate-800","font-bold"); // reset text style
          if (line) line.classList.remove("w-16"); // reset line
        });

        // set active link
        link.classList.add("text-slate-800","dark:text-slate-100", "font-bold"); // highlight text
        const activeLine = link.querySelector(".line");
        if (activeLine) {
          activeLine.classList.add("w-16"); // expand line
        }
      }
    });
  },
  {
    root: document.querySelector(".scrollable"), // scrollable container
    threshold: 0.3, // 30% visible counts as active
  }
);

// Observe all sections
document.querySelectorAll("section[id]").forEach((section) =>
  observer.observe(section)
);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href'); // e.g. "#about"
    const target = document.querySelector(href);

    if (target) {
      // Scroll the custom scrollable column
      const scrollable = document.querySelector(".scrollable");
      scrollable.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

      // Update URL hash properly
      const id = href.substring(1); // remove "#"
      history.pushState(null, "", `#${id}`);
    }
  });
});



const projectOne = {
  imgSource: "./img/link-sharing-app.png",
  projectTitle: "A LINK SHARING APP",
  projectText:
    "Users can bring all of their different works and projects that are hosted on different platforms to ONE PLACE and share them using ONE LINK by using this link sharing app, which is a full-stack application.",
  liveLink: "https://link-sharing-app-delta.vercel.app/",
  gitHubRepo: "https://github.com/Dotjos/link-sharing-app",
  techStack: ["React","Tailwind CSS","Supabase"],
};

const projecTwo = {
  imgSource: "./img/Multi-conf.jpg",
  projectTitle: "A MULTI STEP FORM",
  projectText:
    "The multi step form, as its name implies, is a web app that  guides you through numerous steps of filling out, deciding on, and picking different plans that fit and satisfy your needs.It's a challenge from frontend mentors.",
  liveLink: "https://multiple-conf.vercel.app/",
  gitHubRepo: "https://github.com/Dotjos/multiple-conf",
  techStack: ["HTML", "Tailwind CSS", "JavaScript"],
};

const projecThree = {
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

function projectUpdate(parentSect, project) {
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
    <h1 class="text-sm"><span class="font-medium">Live URL:</span><a class="text-blue-600 hover:text-purple-400 italic" href=${liveLink} target="_blank">liveURL.com</a></h1>
  `;

  txtGithubH1.innerHTML = `
    <h1 class="text-sm"><span class="font-medium">GitHub repo:</span><a class="text-blue-600 hover:text-purple-400 italic"  href=${gitHubRepo} target="_blank">Github.com</a></h1>
  `;

  const stackString = techStack.join();
  txtStackH1.innerHTML = `
    <h1 class="text-sm ><span class="font-medium">Tech stack:</span><span">${stackString}.</span></h1>
  `;

  // Add CSS classes
  productDiv.classList.add(
    "my-3",
    "flex",
    "gap-7",
    "flex-col",
    "md:flex-row",
    "md:gap-5",
    "project",
    "w-full",
    "lg:my-0",
  );

  imgEl.classList.add("w-full","h-full");
  imgDiv.classList.add("h-30","lg:h-20","w-50","md:w-1/3","border-2","overflow-hidden", "rounded-md","border-gray-100","project-image","transition-all","duration-300")
  txtDescDiv.classList.add("text-sm","my-2","dark:text-slate-400","lg:my-1","text-justify");
  txtNameH1.classList.add("font-semibold","text-lg");
  txtDiv.classList.add("w-fit")

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
  const projectSect = document.querySelector(".project");
  projectUpdate(projectSect, projectOne);
  projectUpdate(projectSect, projecTwo);
  projectUpdate(projectSect, projecThree);
  projectUpdate(projectSect, projectFour);
});

// ========================
// Handle hash on page load
// ========================

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      requestAnimationFrame(() => {
        scrollableColumn.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      });
    }
  }
});



window.onload = function () {
  const projects = document.querySelectorAll(".project");
  const projectImages = document.querySelectorAll(".project-image");
  
  // Observer for project fade-in animation
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("fade-in", entry.isIntersecting);
      if (entry.isIntersecting) projectObserver.unobserve(entry.target);
    });
  });

  // Observer for project image border animation
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add lighter border when image comes into view
        entry.target.classList.remove("border-gray-100");
        entry.target.classList.add("border-gray-300", "shadow-lg");
      } else {
        // Revert to original border when image goes out of view
        entry.target.classList.remove("border-gray-300", "shadow-lg");
        entry.target.classList.add("border-gray-100");
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of the image is visible
  });

  // Observe projects for fade-in
  projects.forEach((project) => {
    projectObserver.observe(project);
  });

  // Observe project images for border animation
  projectImages.forEach((image) => {
    imageObserver.observe(image);
  });
};




