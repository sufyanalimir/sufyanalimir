const navbar = document.querySelector(".navbar");
const toggleBtn = document.getElementById("mobile-nav-toggle");

openNavBar = () => {
  const visibility = navbar.getAttribute("data-visible");
  if (visibility === "false") {
    navbar.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
  }
};

toggleBtn.addEventListener("click", openNavBar);
