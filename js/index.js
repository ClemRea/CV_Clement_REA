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

spanH1("Clément Rea,\n Développeur");

// Fonction pour ajouter les span au h2 Portfolio
function spanH2(str, classname) {
  let newStr = str.replace(", ", ",\n");
  let split = newStr.split("");

  split.forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    span.classList.add(classname);

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

    document.querySelector("." + classname).appendChild(span); // Utilisez '.' + classname pour former le sélecteur CSS correct
  });
}

// Utiliser la fonction avec différentes classes
spanH2("Mon portfolio", "titre_h2");
spanH2("Compétences", "titre_h2_skill");

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
