const sections = document.querySelectorAll("section"); // sections with ids
const navLinks = document.querySelectorAll("nav a");
const scrollableColumn= document.querySelector(".scrollable")

function setupScrolling(){
  if (window.innerWidth >= 1024) {

    document.body.style.overflow = 'hidden';

    window.removeEventListener("wheel",handleWheel)
    window.removeEventListener("keydown",handleKeydown)

    window.addEventListener("wheel",handleWheel,{passive:false})
    window.addEventListener("keydown",handleKeydown)    
  } else {
    document.body.style.overflow="auto"

    window.removeEventListener("wheel",handleWheel)
    window.removeEventListener("keydown",handleKeydown)
  }
}

function handleWheel(){
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    // Get scroll direction and amount
    const deltaY = e.deltaY;
    
    // Apply scroll to the scrollable column
    scrollableColumn.scrollTop += deltaY;
  });
}
function handleKeydown(){
  window.addEventListener('keydown', function(e) {
    const scrollAmount = 50;
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            scrollableColumn.scrollTop += scrollAmount;
            break;
        case 'ArrowUp':
            e.preventDefault();
            scrollableColumn.scrollTop -= scrollAmount;
            break;
        case 'PageDown':
            e.preventDefault();
            scrollableColumn.scrollTop += scrollableColumn.clientHeight * 0.8;
            break;
        case 'PageUp':
            e.preventDefault();
            scrollableColumn.scrollTop -= scrollableColumn.clientHeight * 0.8;
            break;
        case 'Home':
            e.preventDefault();
            scrollableColumn.scrollTop = 0;
            break;
        case 'End':
            e.preventDefault();
            scrollableColumn.scrollTop = scrollableColumn.scrollHeight;
            break;
    }
  });
}


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`a[href="#${id}"]`);

      if (entry.isIntersecting && link) {
        // reset all lines
        navLinks.forEach((a) => {
          const line = a.querySelector(".line");
          line.classList.remove("w-16")
        });

        // expand active one
        const activeLine = link.querySelector(".line");
        if (activeLine) {
          activeLine.classList.add("w-16") // expanded
        }
      }
    });
  },
  {
  root: document.querySelector(".scrollable"), // 👈 important: scrollable container
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
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
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
    <h1 class="text-sm"><span class="font-medium">Live URL:</span><a class="text-blue-600 italic" href=${liveLink} target="_blank">liveURL.com</a></h1>
  `;

  txtGithubH1.innerHTML = `
    <h1 class="text-sm"><span class="font-medium">GitHub repo:</span><a class="text-blue-600 italic"  href=${gitHubRepo} target="_blank">Github.com</a></h1>
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
    // "hover:border"
  );

  imgEl.classList.add("w-full","h-full");
  imgDiv.classList.add("h-30","lg:h-20","w-50","md:w-1/3","border-2","overflow-hidden", "rounded-md","border-gray-100","project-image","transition-all","duration-300")
  txtDescDiv.classList.add("text-sm","my-2","lg:my-0","text-justify");
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
        entry.target.classList.remove("border-red-300", "shadow-lg");
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




