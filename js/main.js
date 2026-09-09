document.addEventListener("DOMContentLoaded", () => {
  const popUpSections = document.querySelectorAll(".pop-up-section");

  const handleScrollBlur = () => {
    const windowHeight = window.innerHeight;

    popUpSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Calcula la posición relativa del centro de la sección respecto a la ventana
      const sectionCenter = rect.top + rect.height / 2;
      
      // Proporción de visibilidad (0 cuando está abajo/fuera, 1 cuando llega al centro de la pantalla)
      let progress = (windowHeight - rect.top) / (windowHeight * 0.6);

      // Limita los valores entre 0 y 1
      progress = Math.min(Math.max(progress, 0), 1);

      // Aplica opacidad, desenfoque y desplazamiento proporcionalmente
      const blurValue = (1 - progress) * 12; // De 12px de blur a 0px
      const opacityValue = 0.1 + progress * 0.9; // De 0.1 de opacidad a 1.0
      const translateYValue = (1 - progress) * 30; // De 30px abajo a 0px

      section.style.filter = `blur(${blurValue}px)`;
      section.style.webkitFilter = `blur(${blurValue}px)`;
      section.style.opacity = opacityValue;
      section.style.transform = `translateY(${translateYValue}px)`;
    });
  };

  // Escuchar el evento de scroll y ejecutar al cargar la página
  window.addEventListener("scroll", handleScrollBlur);
  handleScrollBlur();
});