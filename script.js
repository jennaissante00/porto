document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".header nav a");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
  
      navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section &&
          section.offsetTop <= window.scrollY + 50 &&
          section.offsetTop + section.offsetHeight > window.scrollY + 50
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
  