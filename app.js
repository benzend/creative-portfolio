const headerTxt = document.getElementById("header-txt");
const projectsLink = document.getElementById("projects-link");
const skillsLink = document.getElementById("skills-link");
const aboutmeLink = document.getElementById("aboutme-link");
const navLinks = document.querySelectorAll("#header-nav a");
const sideProjLink = document.querySelector("#side-proj-link");
const sideSkillsLink = document.querySelector("#side-skills-link");
const sideAboutLink = document.querySelector("#side-about-link");
const sideContactLink = document.querySelector("#side-contact-link");
const sideNavLinks = document.querySelectorAll("#main-nav a");
const blackSpecs = document.querySelectorAll(".black-spec");
const projectContainers = document.querySelectorAll(".proj-container");

const headerTxtArr = [
  "Hello.",
  "My",
  "name",
  "is",
  "Ben",
  "and",
  "I",
  "am",
  "a",
  "Front",
  "End",
  "Web",
  "Developer",
];

(function displayHeader() {
  headerTxt.innerHTML = headerTxtArr[0];
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[1];
  }, 2000);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[2];
  }, 2150);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[3];
  }, 2400);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[4];
  }, 2600);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[5];
  }, 3500);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[6];
  }, 3700);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[7];
  }, 4300);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[8];
  }, 4500);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[9];
  }, 4700);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[10];
  }, 5100);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[11];
  }, 5500);
  setTimeout(function () {
    headerTxt.innerHTML = headerTxtArr[12];
  }, 5900);
  setTimeout(function () {
    headerTxt.classList.add("stopAnimation");
    headerTxt.innerHTML = "";
  }, 7600);
  setTimeout(function () {
    projectsLink.classList.add("move");
  }, 8000);
  setTimeout(function () {
    skillsLink.classList.add("move");
  }, 8150);
  setTimeout(function () {
    aboutmeLink.classList.add("move");
  }, 8300);
  setTimeout(function () {
    projectsLink.classList.add("widthAndBg");
    projectsLink.firstChild.classList.add("color");
  }, 9450);
  setTimeout(function () {
    skillsLink.classList.add("widthAndBg");
    skillsLink.firstChild.classList.add("color");
  }, 9600);
  setTimeout(function () {
    aboutmeLink.classList.add("widthAndBg");
    aboutmeLink.firstChild.classList.add("color");
  }, 9750);
})();

// if you click on a link in the header page, it makes the sidenavlinks extend
skillsLink.addEventListener("click", () => {
  sideNavLinks.forEach((link) => {
    link.parentElement.classList.remove("current");
  });
  sideSkillsLink.parentElement.classList.add("current");
});
projectsLink.addEventListener("click", () => {
  sideNavLinks.forEach((link) => {
    link.parentElement.classList.remove("current");
  });
  sideProjLink.parentElement.classList.add("current");
});
aboutmeLink.addEventListener("click", () => {
  sideNavLinks.forEach((link) => {
    link.parentElement.classList.remove("current");
  });
  sideAboutLink.parentElement.classList.add("current");
});

//if you click on the sidenavlink, it will extend
// sideSkillsLink.addEventListener("click", () => {
//   sideNavLinks.forEach((link) => {
//     link.parentElement.classList.remove("current");
//   });
//   sideSkillsLink.parentElement.classList.add("current");
// });
// sideProjLink.addEventListener("click", () => {
//   sideNavLinks.forEach((link) => {
//     link.parentElement.classList.remove("current");
//   });
//   sideProjLink.parentElement.classList.add("current");
// });
// sideAboutLink.addEventListener("click", () => {
//   sideNavLinks.forEach((link) => {
//     link.parentElement.classList.remove("current");
//   });
//   sideAboutLink.parentElement.classList.add("current");
// });
// sideContactLink.addEventListener("click", () => {
//   sideNavLinks.forEach((link) => {
//     link.parentElement.classList.remove("current");
//   });
//   sideContactLink.parentElement.classList.add("current");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     sideProjLink.parentElement.parentElement.classList.add("appear");
//   });
// });

setInterval(() => {
  //header section
  if (pageXOffset < innerWidth - innerWidth / 2) {
    sideNavLinks.forEach((link) => {
      link.parentElement.classList.remove("current");
    });
    // blackSpecs.forEach((spec) => {
    //   spec.style.display = "block";
    // });

    //project section
  } else if (pageXOffset < innerWidth * 2 - innerWidth / 2) {
    sideProjLink.parentElement.parentElement.classList.add("appear");
    // blackSpecs.forEach((spec) => {
    //   spec.style.display = "none";
    // });
    //making project containers appear
    let mili = 0;
    for (let i = 0; i < projectContainers.length; i++) {
      setTimeout(() => {
        projectContainers[i].classList.add("appear");
      }, mili);
      mili += 100;
    }
    if (!sideProjLink.parentElement.classList.contains("current")) {
      sideNavLinks.forEach((link) => {
        link.parentElement.classList.remove("current");
      });
      sideProjLink.parentElement.classList.add("current");
    }

    //skills section
  } else if (pageXOffset < innerWidth * 3 - innerWidth / 2) {
    if (!sideSkillsLink.parentElement.classList.contains("current")) {
      sideNavLinks.forEach((link) => {
        link.parentElement.classList.remove("current");
      });
      sideSkillsLink.parentElement.classList.add("current");
    }
    sideSkillsLink.classList.add("current");

    //about section
  } else if (pageXOffset < innerWidth * 4 - innerWidth / 2) {
    if (!sideAboutLink.parentElement.classList.contains("current")) {
      sideNavLinks.forEach((link) => {
        link.parentElement.classList.remove("current");
      });
      sideAboutLink.parentElement.classList.add("current");
    }
    sideAboutLink.classList.add("current");

    //contact section
  } else if (pageXOffset < innerWidth * 5 - innerWidth / 2) {
    if (!sideContactLink.parentElement.classList.contains("current")) {
      sideNavLinks.forEach((link) => {
        link.parentElement.classList.remove("current");
      });
      sideContactLink.parentElement.classList.add("current");
    }
    sideContactLink.classList.add("current");
  }
}, 100);
