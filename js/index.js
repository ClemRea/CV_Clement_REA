// Fonction pour ajouter les span au h1
function spanH1(str) {
  let newStr = str.replace(", ", ",\n");
  let split = newStr.split("");

  split.forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    span.classList.add("spanH1");

    if (letter === "\n") {
      span.style.display = "block";
    }

    // Ajouter un événement de hover pour chaque span
    span.addEventListener("mouseover", () => {
      span.classList.add("rotate-animation"); // Ajouter la classe au survol
    });

    span.addEventListener("mouseout", () => {
      span.classList.remove("rotate-animation"); // Supprimer la classe quand le survol est terminé
    });

    document.querySelector("h1").appendChild(span);
  });
}

spanH1("Clément Rea,\n Développeur Web");

// Fonction pour ajouter les span au h2
function spanH2(str) {
  let newStr = str.replace(", ", ",\n");
  let split = newStr.split("");

  split.forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    span.classList.add("spanH2");

    if (letter === "\n") {
      span.style.display = "block";
    }

    // Ajouter un événement de hover pour chaque span
    span.addEventListener("mouseover", () => {
      span.classList.add("rotate-animation"); // Ajouter la classe au survol
    });

    span.addEventListener("mouseout", () => {
      span.classList.remove("rotate-animation"); // Supprimer la classe quand le survol est terminé
    });

    document.querySelector("h2").appendChild(span);
  });
}

spanH2("Mon portfolio");

// Fonction pour ajouter les span au h4
function spanH4(str) {
  let newStr = str.replace(", ", ",\n");
  let split = newStr.split("");

  split.forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    span.classList.add("spanH4");

    if (letter === "\n") {
      span.style.display = "block";
    }

    // Ajouter un événement de hover pour chaque span
    span.addEventListener("mouseover", () => {
      span.classList.add("rotate-animation"); // Ajouter la classe au survol
    });

    span.addEventListener("mouseout", () => {
      span.classList.remove("rotate-animation"); // Supprimer la classe quand le survol est terminé
    });

    document.querySelector("h4").appendChild(span);
  });
}

spanH4("A propos de moi");

// Effet d'apparition des lettre, diplome, menu et bouton contact
const lettre = document.querySelectorAll("h1 span");
const btn = document.querySelector(".container");
const diplome = document.querySelector(".diplome");
const menu = document.querySelector(".menu");
const scroll_down = document.querySelectorAll(".scroll_container");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  //**********EFFET DE REBOND A CORRIGER IL NE FONCTIONNE PAS**********//
  TL.staggerFrom(scroll_down, 0.3, { opacity: 0, ease: "power2.out" })
    .staggerFrom(
      menu,
      0.6,
      { left: -100, opacity: 0, ease: "power2.out" },
      "-=1"
    )
    .staggerFrom(
      lettre,
      0.3,
      { opacity: 0, bottom: -50, ease: "power2.out" },
      0.1
    )
    .staggerFrom(diplome, 1, { opacity: 0, ease: "power2.out" })
    .staggerFrom(btn, 0.8, { opacity: 0, ease: "power2.out" });

  TL.play();
});

// Sélectionnez toutes les cartes
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
