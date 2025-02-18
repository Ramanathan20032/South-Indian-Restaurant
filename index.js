// --------------------------------------------------------------------------------
// changing the styles on scrolling - 30% from the top
document.addEventListener("DOMContentLoaded", function () {
  const scrollThreshold = window.innerHeight * 0.2;
  const navContainer = document.querySelector(".nav-container");
  const navbar = document.querySelector(".banner-wrapper .navbar");
  const links = document.querySelectorAll(
    ".banner-wrapper .navbar .nav-items .nav-item a"
  );
  const current_page = document.querySelector(".active-page");

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      navContainer.classList.add("sticky");
      navbar.style.padding = "10px 0";
      links.forEach((link) => {
        link.style.color = "#363636";
        link.style.fontWeight = "600";
      });
      current_page.style.color = "#FF9800";
    } else {
      navContainer.classList.remove("sticky");
      navbar.style.padding = "16px 0";
      links.forEach((link) => {
        link.style.color = "#ffffff";
        link.style.fontWeight = "600";
      });
      current_page.style.color = "#FF9800";
    }
  }

  // Add hover effect for both sticky and non-sticky states
  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      link.style.color = "#FF9800";
    });

    link.addEventListener("mouseleave", function () {
      if (window.scrollY > scrollThreshold) {
        link.style.color = "#363636"; // Dark color when sticky
      } else {
        link.style.color = "#ffffff"; // White color when not sticky
      }
    });
  });

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
});


// --------------------------------------------------------------------------------
// sidebar icon disablity
const sidebarIcon = document.querySelector(".banner-wrapper .navbar .hamburgerIcon-container");
const crossX = document.querySelector(".side-nav .side-nav-container .sideNav-image-cross p i");
const sideNav = document.querySelector(".side-nav-container");

// Function to open the side navigation
sidebarIcon.addEventListener("click", () => {
    sideNav.style.display = "block";
    sideNav.style.position = "fixed";
    sideNav.style.top = "0";
    sideNav.style.right = "0";
    sideNav.style.height = "100vh";
    sideNav.style.zIndex = "2000";
});

sidebarIcon.addEventListener("click", () => {
  sideNav.classList.add("active");
});

// Function to close the side navigation
function closeSideNav() {
  sideNav.classList.remove("active");
}

// Close when clicking the cross icon
crossX.addEventListener("click", closeSideNav);

// Close when clicking outside of the sideNav
document.addEventListener("click", (event) => {
  if (!sideNav.contains(event.target) && !sidebarIcon.contains(event.target)) {
      closeSideNav();
  }
});

// Automatically close sideNav when screen size is above 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeSideNav();
  }
});
