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
    const intervalId = setInterval(() => {
      if (percentage < 100) {
        percentage += 1; // Augmenter la vitesse en ajustant ce nombre
        loaderText.textContent = Math.round(percentage) + "%";
        loaderBar.style.width = percentage + "%";
      } else {
        clearInterval(intervalId);
        setTimeout(startOpacityAnimation, 2000); // 2000ms de délai avant de démarrer le fondu
      }
    }, 9); // actualisation du pourcentage toutes les 9ms
  }

  setTimeout(function () {
    animatePercentage();
  }, 350); // 350ms de délai avant de démarrer l'animation du pourcentage
});
