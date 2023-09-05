// // Sélectionnez toutes les cartes
const cards = document.querySelectorAll(".card");

// Fonction pour gérer l'effet de survol
function handleCardHover(card, isHoveringImage) {
  const cardImage = card.querySelector(".card_image");
  const cardContent = card.querySelector(".card_content");
  const cardContentBackground = card.querySelector(".card_content_background");
  const cardContentTitle = card.querySelector(".card_content_title");

  if (isHoveringImage) {
    cardImage.style.filter = ""; // Revenir à l'image originale
    cardContent.style.filter = ""; // Revenir à la couleur originale du contenu
    cardContentTitle.style.color = ""; // Revenir à la couleur originale du titre
    // cardContentDescription.style.backgroundColor = ""; // Revenir au fond original du texte
    cardContentBackground.style.filter = ""; // Revenir à la couleur originale du titre
  } else {
    cardImage.style.filter = "brightness(0.8)"; // Assombrir l'image
    // cardContent.style.backgroundColor = "white"; // Fond de la card content en blanc
    cardContentTitle.style.color = "white"; // Texte plus clair
  }
}

// Ajoutez des écouteurs d'événements pour chaque carte
cards.forEach((card) => {
  // Événement pour le survol de l'image
  const cardImage = card.querySelector(".card_image");
  cardImage.addEventListener("mouseenter", () => {
    handleCardHover(card, true); // Indique que l'image est survolée
  });
  cardImage.addEventListener("mouseleave", () => {
    handleCardHover(card, false); // Indique que l'image n'est pas survolée
  });

  // Événement pour le survol du contenu
  const cardContent = card.querySelector(".card_content");
  cardContent.addEventListener("mouseenter", () => {
    handleCardHover(card, false); // Indique que le contenu est survolé
  });
  cardContent.addEventListener("mouseleave", () => {
    handleCardHover(card, true); // Indique que le contenu n'est pas survolé
  });

  // Événement pour le survol de la zone cardImage
  cardImage.addEventListener("mouseenter", () => {
    const cardContentBackground = card.querySelector(
      ".card_content_background"
    );
    const cardImage = card.querySelector(".card_image");
    cardContentBackground.style.filter = "brightness(0.6)"; // Assombrir le fond du titre + texte
    cardContent.style.filter = "brightness(0.6)";
    cardImage.style.filter = "brightness(2)";
  });

  // Événement pour la sortie du survol de la zone cardImage
  cardImage.addEventListener("mouseleave", () => {
    const cardContentBackground = card.querySelector(
      ".card_content_background"
    );
    cardImage.style.filter = "";
    cardContentBackground.style.filter = "";
    cardContent.style.filter = ""; // Revenir à la couleur originale du titre
  });
});
