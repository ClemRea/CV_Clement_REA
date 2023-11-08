const progressBar = document.querySelector(".scrollbar");

let totalHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  progress > 26.5
    ? (scrollToTopBtn.style.visibility = "visible")
    : (scrollToTopBtn.style.visibility = "hidden");
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;
});

const progressBarClick = document.querySelector(".click_scrollbar");

progressBarClick.addEventListener("click", (e) => {
  let newPageScroll = (e.clientY / progressBarClick.offsetHeight) * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: "smooth",
  });
});

const scrollToTopBtn = document.querySelector(".scroll_to_top");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
