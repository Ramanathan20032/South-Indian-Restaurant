// !--------------------------------------------------------------------------------
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

// !--------------------------------------------------------------------------------
// sidebar icon disablity
const sidebarIcon = document.querySelector(
  ".banner-wrapper .navbar .hamburgerIcon-container"
);
const crossX = document.querySelector(
  ".side-nav .side-nav-container .sideNav-image-cross p i"
);
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


// !--------------------------------------------------------------------------------
// About Us Animation
document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll(".zoom, .up");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // To trigger only once
        }
      });
    },
    { threshold: 0.1 }
  );

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});


// !--------------------------------------------------------------------------------
// Popular Animation
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".custom-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});


// !--------------------------------------------------------------------------------
// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".achievement-count");

  const updateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = Math.max(target / 50); 

    let count = 0;
    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.min(Math.ceil(count), target); 
        requestAnimationFrame(update);
      } else {
        counter.innerText = `${target}+`;
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          updateCounter(counter);
          observer.unobserve(counter); 
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});


// !--------------------------------------------------------------------------------
// Testimonial Section
document.addEventListener('DOMContentLoaded', function () {
  const testimonials = [
    {
        content: `Absolutely the best South-Indian restaurant in New Jersey! The mini-tiffin and appams are fantastic. A must-visit if you're near Edison. 
                  The service is super fast and efficient. The ambience is lovely, and the food tastes incredible. Highly recommend this place!`,
        name: `Shravankumar Hiregoudar`
    },
    {
        content: `Incredible South-Indian flavors! The food quality, taste, and service are outstanding. Even with a full house, our meals were served quickly. 
                  Special thanks to Rajesh for his polite and prompt service. A2B is deserving of five stars. Will surely visit again for a great meal.`,
        name: `Suhas Biwalkar`
    },
    {
        content: `This place is fantastic! They offer a huge variety of dishes, and everything is delicious. You can even choose your spice level. 
                  I personally love their Indochinese selection. If you’re looking for great food, I highly recommend this restaurant to everyone.`,
        name: `Om Sonani`
    }
];

  const contentElement = document.querySelector('.testimonial-wrapper .testimonial-content');
  const nameElement = document.querySelector('.testimonial-wrapper .testimonial-name');
  const circleSpans = document.querySelectorAll('.testimonial-wrapper .next-circle span');
  let currentIndex = 0;
  let interval;

  function updateTestimonial(index) {
      // Update content and name
      contentElement.textContent = testimonials[index].content;
      nameElement.textContent = testimonials[index].name;

      // Update active span indicator
      circleSpans.forEach((span, spanIndex) => {
          span.classList.toggle('active', spanIndex === index);   // toggle --- if(add-class ,true) else(remove-class, false)
      });

      // Update currentIndex
      currentIndex = index;
  }

  function startAutoRotation() {
      interval = setInterval(() => {
          const nextIndex = (currentIndex + 1) % testimonials.length;
          updateTestimonial(nextIndex);
      }, 4000);
  }

  // Initialize display and auto-rotation
  updateTestimonial(currentIndex);
  startAutoRotation();

  // Event listeners for clicking on spans to manually navigate
  circleSpans.forEach((span, index) => {
      span.addEventListener('click', () => {
          clearInterval(interval); // Stop auto-rotation
          updateTestimonial(index); // Show the clicked testimonial
          startAutoRotation(); // Restart auto-rotation
      });
  });
});


// !--------------------------------------------------------------------------------
// Page - Up
document.addEventListener("DOMContentLoaded", () => {
  const pageUp = document.querySelector(".page-up");

  if (!pageUp) {
    console.error("Error: .page-up element not found in the DOM");
    return;
  }

  window.addEventListener("scroll", () => {
  //   console.log("Current Scroll Position (window.scrollY):", window.scrollY); 
    if (window.scrollY >= 120) {  // Ensure visibility after 120px
      pageUp.classList.add("show");
      // console.log("page-up is now visible!"); 
    } else {
      pageUp.classList.remove("show");
      // console.log("page-up is hidden!"); 
    }
  });

  pageUp.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});  
