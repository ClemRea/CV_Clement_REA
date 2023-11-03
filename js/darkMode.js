function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateButton({ isDark }) {
  const button = document.getElementById("theme-switch");
  const buttonText = isDark ? "Mode clair" : "Mode sombre";
  const buttonTextUpdate = document.querySelector(".mode_text");
  buttonTextUpdate.innerText = buttonText;
  button.checked = isDark;
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({ isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

document.getElementById("theme-switch").addEventListener("change", (e) => {
  const newTheme = e.target.checked ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });
  currentThemeSetting = newTheme;

  // Met à jour le texte du switcher
  const buttonTextUpdate = document.querySelector(".mode_text");
  buttonTextUpdate.innerText =
    newTheme === "dark" ? "Mode clair" : "Mode sombre";
});
