// Error
const handleErrPages = (status) => {
  if (status === 404) {
    window.location.href = '/html/404.html';
  } else if (status === 500) {
    window.location.href = '/html/500.html';
  }
};

// Loading
const loading = document.querySelector('.loading');
const showLoading = () => { loading.style.display = 'block'; };
const hideLoading = () => { loading.style.display = 'none'; };

// Light and dark mode and localStorage
const theme = JSON.parse(localStorage.getItem('theme'));
document.documentElement.setAttribute('data-theme', theme);
const themeSwitcher = document.querySelector('#them-input');
const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', switchToTheme);
  localStorage.setItem("theme", JSON.stringify(switchToTheme));
};
themeSwitcher.addEventListener('click', switchTheme);
