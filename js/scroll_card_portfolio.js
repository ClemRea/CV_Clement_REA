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
  cardsToLeft.forEach((card) => observer.observe(card));
  cardsToRight.forEach((card) => observer.observe(card));
});
