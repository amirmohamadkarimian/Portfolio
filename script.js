/**
 * PORTFOLIO INTERACTIVE CONTROLLER
 * Amirmohamad Karimian — Frontend Developer
 */

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const header = document.getElementById("site-header");
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const heroEmailBtn = document.getElementById("hero-email-btn");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  /* --- 1. Header Scroll Effect --- */
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* --- 2. Mobile Menu Toggle --- */
  const openMenu = () => {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (openMenuBtn) openMenuBtn.addEventListener("click", openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on backdrop click
  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });
  }

  /* --- 3. Copy Email & Toast Notification --- */
  const showToast = (msg = "Copied to clipboard!") => {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    const email = "karimian.dev@gmail.com";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("Email address copied to clipboard!");
        })
        .catch(() => {
          // Fallback if clipboard API fails
          window.location.href = `mailto:${email}`;
        });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  if (heroEmailBtn) {
    heroEmailBtn.addEventListener("click", copyEmailToClipboard);
  }

  /* --- 4. Active Section Link Highlight --- */
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".desktop-nav .nav-link");

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });

        mobileNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });

  /* --- 5. Projects Slider / Carousel Controller --- */
  const sliderTrack = document.getElementById("projects-slider-track");
  const sliderPrevBtn = document.getElementById("slider-prev-btn");
  const sliderNextBtn = document.getElementById("slider-next-btn");
  const sliderProgress = document.getElementById("slider-progress");

  if (sliderTrack && sliderPrevBtn && sliderNextBtn) {
    const cardWidth = 440; // Card width + gap

    const updateSliderState = () => {
      const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;
      const currentScroll = sliderTrack.scrollLeft;

      // Update button disabled state
      sliderPrevBtn.disabled = currentScroll <= 10;
      sliderNextBtn.disabled = currentScroll >= maxScroll - 10;

      // Update progress bar
      if (maxScroll > 0 && sliderProgress) {
        const percentage = Math.min(
          100,
          Math.max(
            25,
            ((currentScroll + sliderTrack.clientWidth) /
              sliderTrack.scrollWidth) *
              100,
          ),
        );
        sliderProgress.style.width = `${percentage}%`;
      }
    };

    sliderNextBtn.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: cardWidth, behavior: "smooth" });
    });

    sliderPrevBtn.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });

    sliderTrack.addEventListener("scroll", updateSliderState, {
      passive: true,
    });
    updateSliderState();

    // Mouse drag support for desktop sliding
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    sliderTrack.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - sliderTrack.offsetLeft;
      scrollStart = sliderTrack.scrollLeft;
      sliderTrack.style.cursor = "grabbing";
      sliderTrack.style.scrollSnapType = "none";
    });

    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      sliderTrack.style.cursor = "";
      sliderTrack.style.scrollSnapType = "x mandatory";
    });

    sliderTrack.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - sliderTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      sliderTrack.scrollLeft = scrollStart - walk;
    });
  }
});
