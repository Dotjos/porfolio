const sections = document.querySelectorAll("section"); // sections with ids
const navLinks = document.querySelectorAll("nav a");
const scrollableColumn = document.querySelector(".scrollable")
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

const ringSize = 100; // Fixed size from CSS
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
          a.classList.remove("text-slate-800", "dark:text-slate-100")
          link.classList.add("text-slate-800", "font-bold"); // reset text style
          if (line) line.classList.remove("w-16"); // reset line
        });

        // set active link
        link.classList.add("text-slate-800", "dark:text-slate-100", "font-bold"); // highlight text
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

//refactor project upload
const Products = [
  {
    imgSource: "./img/Audiophile.png",
    projectTitle: "E-COMMERCE APP",
    projectText:
      "I built the Audiophile e-commerce site to deliver a premium shopping experience that reflects the sophistication of high-end audio products. The result is a platform that not only sells audio gear but also conveys the lifestyle and prestige of exceptional sound..",
    liveLink: "https://audiophile-conv.vercel.app/",
    gitHubRepo: "https://github.com/Dotjos/audiophile",
    techStack: ["Typescript", "Next.js", "Tailwind CSS"],
  },
  {
    imgSource: "./img/zentry.png",
    projectTitle: "ZENTRY LANDING PAGE REMAKE",
    projectText:
      "I built a complete remake of the Zentry gaming platform using Next.js and TypeScript, recreating their vision of a Metagame Layer that unifies gaming experiences across multiple platforms,with modern animation and responsive design.",
    liveLink: "https://zenkit-gamma.vercel.app/",
    gitHubRepo: "https://github.com/Dotjos/zenkit",
    techStack: ["Typescript", "Next.js", "Tailwind CSS", "GSAP"],
  }
]


function projectUpdate(parentSect, project) {
  const {
    imgSource,
    projectTitle,
    projectText,
    liveLink,
    gitHubRepo,
    techStack,
  } = project;

  const productDiv = document.createElement("div");
  productDiv.classList.add(
    "my-3", "flex", "gap-7", "flex-col", "md:flex-row",
    "md:gap-5", "project", "w-full", "lg:my-0"
  );

  const stackString = techStack.join(", ");

  productDiv.innerHTML = `
    <div class="h-30 lg:h-20 w-50 md:w-1/3 border-2 overflow-hidden rounded-md border-gray-100 project-image transition-all duration-300">
      <img src="${imgSource}" loading="lazy" class="w-full h-full" alt="${projectTitle}">
    </div>
    <div class="w-fit">
      <div><h1 class="font-semibold text-lg">${projectTitle}</h1></div>
      <div class="text-sm my-2 dark:text-slate-400 lg:my-1 text-justify">
        <p>${projectText}</p>
      </div>
      <div>
        <h1 class="text-sm">
          <span class="font-medium">Live URL:</span>
          <a class="text-blue-600 hover:text-purple-400 italic" href="${liveLink}" target="_blank">liveURL.com</a>
        </h1>
      </div>
      <div>
        <h1 class="text-sm">
          <span class="font-medium">GitHub repo:</span>
          <a class="text-blue-600 hover:text-purple-400 italic" href="${gitHubRepo}" target="_blank">Github.com</a>
        </h1>
      </div>
      <div>
        <h1 class="text-sm">
          <span class="font-medium">Tech stack:</span>
          <span>${stackString}.</span>
        </h1>
      </div>
    </div>
  `;

  parentSect.appendChild(productDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  const projectSect = document.querySelector(".project");
  Products.forEach(project => projectUpdate(projectSect, project));

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




