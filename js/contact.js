window.addEventListener("load", function () {
  const loaderBar = document.querySelector(".loader-bar");
  const loaderText = document.querySelector(".loader-text");
  const loaderContainer = document.querySelector(".loader_container");
  let percentage = 0;

  // Fonction pour démarrer l'animation de fondu
  function startOpacityAnimation() {
    // Ajout de la transition d'opacité pour le fondu
    loaderContainer.style.transition = "opacity 0.5s ease-in-out";

    // Réduire l'opacité pour déclencher le fondu
    loaderContainer.style.opacity = "0";

    // Attente de la fin de la transition pour masquer le loader
    loaderContainer.addEventListener("transitionend", function () {
      loaderContainer.style.display = "none";
    });
  }

  // Fonction pour animer le pourcentage
  function animatePercentage() {
    if (percentage < 100) {
      percentage += 0.5; // Augmenter la vitesse en ajustant ce nombre
      loaderText.textContent = Math.round(percentage) + "%";
      loaderBar.style.width = percentage + "%";
      requestAnimationFrame(animatePercentage);
    } else {
      setTimeout(startOpacityAnimation, 2000); // 2000ms (2 secondes) de délai avant de démarrer le fondu
    }
  }

  setTimeout(function () {
    animatePercentage();
  }, 350); // 350ms de délai avant de démarrer l'animation du pourcentage
});
