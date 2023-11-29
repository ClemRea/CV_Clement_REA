document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  const cardsToLeft = document.querySelectorAll(".card_to_left");
  const cardsToRight = document.querySelectorAll(".card_to_right");
  const skillCard = document.querySelectorAll(".skill_card");
  const mediaCard = document.querySelectorAll(".card_media");
  cardsToLeft.forEach((card) => observer.observe(card));
  cardsToRight.forEach((card) => observer.observe(card));
  skillCard.forEach((card) => observer.observe(card));
  mediaCard.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  const skillCard = document.querySelectorAll(".skill_card");
  skillCard.forEach((card) => observer.observe(card));
});
