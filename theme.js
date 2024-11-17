function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
  
    if (isDarkMode) {
      document.body.style.background =
        "linear-gradient(135deg, #2c2c2c, #1a1a1a)";
      document.body.style.color = "#ddd";
  
      const navLinks = document.querySelectorAll("nav a");
      navLinks.forEach((link) => {
        link.style.color = "#ddd";
        link.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      });
  
      navLinks.forEach((link) => {
        link.onmouseover = () => {
          link.style.backgroundColor = "#444444";
          link.style.color = "#ffffff";
        };
        link.onmouseout = () => {
          link.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          link.style.color = "#ddd";
        };
      });
  
      document.querySelector("main").style.background = "rgba(50, 50, 50, 0.9)";
      document.querySelector("main").style.boxShadow =
        "0 6px 30px rgba(0, 0, 0, 0.5)";
      document.querySelector("main").style.border = "1px solid #555";
  
      document.querySelector("form").style.backgroundColor = "#333";
      document.querySelector("form").style.color = "#ddd";
      document.querySelector("form").style.boxShadow =
        "0 4px 10px rgba(0, 0, 0, 0.3)";
  
      document.querySelectorAll("label").forEach((label) => {
        label.style.fontWeight = "bold";
        label.style.marginBottom = "8px";
        label.style.display = "block";
        label.style.color = "#ffffff";
      });
  
      document.querySelectorAll("input, select, textarea").forEach((input) => {
        input.style.backgroundColor = "#444";
        input.style.border = "1px solid #666";
        input.style.color = "#ddd";
      });
  
      document.querySelector("button").style.background =
        "linear-gradient(135deg, #444444, #555555)";
  
      const button = document.querySelector("button");
      button.onmouseover = () => {
        button.style.backgroundColor = "#333333";
      };
      button.onmouseout = () => {
        button.style.background = "linear-gradient(135deg, #444444, #555555)";
      };
  
      document.querySelector("footer").style.backgroundColor = "#1a1a1a";
      document.querySelector("footer").style.color = "#bbb";
  
      document.querySelectorAll("h1, h2").forEach((header) => {
        header.style.color = "#ffffff";
      });
  
      document.querySelectorAll("p").forEach((paragraph) => {
        paragraph.style.color = "#ffffff";
      });
  
      const fifthCriteriaElements = document.querySelectorAll(".fifthCriteria");
      fifthCriteriaElements.forEach((element) => {
        element.style.backgroundColor = "#333";
      });
  
      const productCards = document.querySelectorAll(".product-card");
      productCards.forEach((card) => {
        card.style.backgroundColor = "#333";
      });
  
      document.querySelectorAll(".product-item").forEach((element) => {
        element.classList.toggle("dark-mode");
      });
  
      document.querySelectorAll("h1").forEach((element) => {
        element.classList.toggle("dark-mode");
      });
  
      localStorage.setItem("theme", "dark");
    } else {
      // Светлая тема
      document.body.style.background =
        "linear-gradient(135deg, #f0f0f0, #e0e0e0)";
      document.body.style.color = "#333";
  
      const navLinks = document.querySelectorAll("nav a");
      navLinks.forEach((link) => {
        link.style.color = "white";
        link.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      });
  
      document.querySelector("main").style.background =
        "rgba(255, 255, 255, 0.9)";
      document.querySelector("main").style.boxShadow =
        "0 6px 30px rgba(0, 0, 0, 0.1)";
      document.querySelector("main").style.border = "1px solid #e0e0e0";
  
      document.querySelector("form").style.backgroundColor = "#ffffff";
      document.querySelector("form").style.color = "#333";
  
      document.querySelectorAll("label").forEach((label) => {
        label.style.color = "#333";
      });
  
      document.querySelectorAll("input, select, textarea").forEach((input) => {
        input.style.backgroundColor = "#ffffff";
        input.style.border = "1px solid #ddd";
        input.style.color = "#333";
      });
  
      document.querySelector("footer").style.backgroundColor = "#333";
      document.querySelector("footer").style.color = "white";
  
      document.querySelectorAll("h1, h2").forEach((header) => {
        header.style.color = "#333";
      });
  
      document.querySelectorAll("p").forEach((paragraph) => {
        paragraph.style.color = "#555";
      });
  
      localStorage.setItem("theme", "light");
    }
  }
  
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      toggleDarkMode();
    }
  });
  
  document
    .getElementById("themeToggleButton")
    .addEventListener("click", toggleDarkMode);
  
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product-card");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
  
        // Показать/скрыть кнопки
        productCards.forEach((card) => {
          if (
            category === "all" ||
            card.getAttribute("data-category") === category
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
  
        // Акт.кнопка
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });
  
  
  