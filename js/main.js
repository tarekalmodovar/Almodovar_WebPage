document.addEventListener("DOMContentLoaded", () => {
  const popUpSections = document.querySelectorAll(".pop-up-section");
  
  const path = window.location.pathname;
  const isHomepage = path.endsWith("index.html") || path.endsWith("/") || path === "";
  const isAboutPage = path.includes("about.html");

  const handleScrollBlur = () => {
    const windowHeight = window.innerHeight;

    popUpSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      
      if (isHomepage) {
        // HOMEPAGE: Nítido desde el inicio (sin blur)
        let progress = (windowHeight - rect.top) / (windowHeight * 0.3);
        progress = Math.min(Math.max(progress, 0), 1);

        section.style.filter = "none";
        section.style.webkitFilter = "none";
        section.style.opacity = 0.5 + progress * 0.5;
        section.style.transform = `translateY(${(1 - progress) * 15}px)`;
      } else if (isAboutPage) {
        // ABOUT ME: Efecto blur profundo y marcado al deslizar
        let progress = (windowHeight - rect.top) / (windowHeight * 0.5);
        progress = Math.min(Math.max(progress, 0), 1);

        const blurValue = (1 - progress) * 12; // Transición de 12px de blur a 0px
        const opacityValue = 0.1 + progress * 0.9;
        const translateYValue = (1 - progress) * 35;

        section.style.filter = `blur(${blurValue}px)`;
        section.style.webkitFilter = `blur(${blurValue}px)`;
        section.style.opacity = opacityValue;
        section.style.transform = `translateY(${translateYValue}px)`;
      } else {
        // OTRAS PÁGINAS (CV, Schedule): Blur ligero
        let progress = (windowHeight - rect.top) / (windowHeight * 0.4);
        progress = Math.min(Math.max(progress, 0), 1);

        const blurValue = (1 - progress) * 4;
        section.style.filter = `blur(${blurValue}px)`;
        section.style.webkitFilter = `blur(${blurValue}px)`;
        section.style.opacity = 0.3 + progress * 0.7;
        section.style.transform = `translateY(${(1 - progress) * 20}px)`;
      }
    });
  };

  window.addEventListener("scroll", handleScrollBlur);
  handleScrollBlur();
});