document.addEventListener("DOMContentLoaded", () => {
  // Fetch and insert Navbar
  const navContainer = document.getElementById("navbar-container");
  if (navContainer) {
    fetch("components/navbar.html")
      .then((response) => response.text())
      .then((html) => {
        navContainer.innerHTML = html;
      })
      .catch((err) => console.error("Error loading navbar:", err));
  }

  // Fetch and insert Footer
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    fetch("components/footer.html")
      .then((response) => response.text())
      .then((html) => {
        footerContainer.innerHTML = html;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }
});