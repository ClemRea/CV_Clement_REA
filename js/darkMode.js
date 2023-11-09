// GESTION DU LOCAL STORAGE
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
  const buttonBase = document.getElementById("theme-switch-base");
  // const buttonTextUpdateBase = document.querySelector(".mode_text");
  // buttonTextUpdateBase.innerText = isDark ? "Mode clair" : "Mode sombre";
  buttonBase.checked = isDark;

  const buttonDropdown = document.getElementById("theme-switch-dropdown");
  buttonDropdown.checked = isDark;
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

// BOUTTON DE BASE
document.getElementById("theme-switch-base").addEventListener("change", (e) => {
  const newTheme = e.target.checked ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });
  currentThemeSetting = newTheme;

  // const buttonTextUpdate = document.querySelector(".mode_text");
  // buttonTextUpdate.innerText =
  //   newTheme === "dark" ? "Mode clair" : "Mode sombre";
});

// BOUTON DU DROPDOWN
document
  .getElementById("theme-switch-dropdown")
  .addEventListener("change", (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    updateThemeOnHtmlEl({ theme: newTheme });
    currentThemeSetting = newTheme;
  });
