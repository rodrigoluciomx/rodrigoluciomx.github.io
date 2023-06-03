document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = this.getAttribute("href").substring(1);
        const sections = document.querySelectorAll("section");
  
        sections.forEach(function(section) {
          if (section.id === target) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        });
      });
    });
  });
  
  