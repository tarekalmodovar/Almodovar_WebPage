document.addEventListener("DOMContentLoaded", () => {
  const popUpSections = document.querySelectorAll(".pop-up-section");
  
  // Verifica si la página actual es la Homepage
  const path = window.location.pathname;
  const isHomepage = path.endsWith("index.html") || path.endsWith("/") || path === "";

  const handleScrollBlur = () => {
    const windowHeight = window.innerHeight;

    popUpSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      
      // Proporción de visibilidad
      let progress = (windowHeight - rect.top) / (windowHeight * 0.3);
      progress = Math.min(Math.max(progress, 0), 1);

      const opacityValue = 0.4 + progress * 0.6;
      const translateYValue = (1 - progress) * 15;

      // Si es la Homepage, el desenfoque se mantiene estrictamente en 0px
      if (isHomepage) {
        section.style.filter = "none";
        section.style.webkitFilter = "none";
      } else {
        // En las demás páginas mantiene el desenfoque sutil
        const blurValue = (1 - progress) * 4;
        section.style.filter = `blur(${blurValue}px)`;
        section.style.webkitFilter = `blur(${blurValue}px)`;
      }

      section.style.opacity = opacityValue;
      section.style.transform = `translateY(${translateYValue}px)`;
    });
  };

  window.addEventListener("scroll", handleScrollBlur);
  handleScrollBlur();
});