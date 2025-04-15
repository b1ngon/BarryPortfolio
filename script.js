function showSection(sectionID) {
    const sections = document.querySelectorAll(".content-section");
    const links = document.querySelectorAll(".nav-links a");
  
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove("active");
    });
  
    // Show selected section
    const target = document.getElementById(sectionID);
    if (target) {
      target.classList.add("active");
    }
  
    // Update active nav link
    links.forEach(link => {
      if (link.getAttribute("onclick")?.includes(sectionID)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  
// Show home by default when page loads
document.addEventListener("DOMContentLoaded", () => {
    showSection("home-section");
  });

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  });