window.addEventListener('load', () => {
    //Set theme based on local storage, then add transition time
  const theme = getThemePreference();
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.setProperty('--theme-animation-timing', '300ms');

    //Add listener for any theme toggle class
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.addEventListener('click', toggleTheme);
  }
}, false);

function getThemePreference() {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');

  } else {
    return 'dark';
  }
}

function setThemePreference(theme) {
  localStorage.setItem('theme', theme);

  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const currentTheme = getThemePreference();
  const newTheme = (currentTheme === 'light') ? 'dark' : 'light';

  setThemePreference(newTheme);
}