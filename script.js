const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    toggleButton.classList.add('active');
  } else {
    root.classList.remove('dark');
    toggleButton.classList.remove('active');
  }
}

function updateToggleIcon() {
  if (!toggleButton) return;
  const icon = toggleButton.querySelector('i');
  if (root.classList.contains('dark')) {
    icon.className = 'fa-solid fa-sun';
    toggleButton.setAttribute('aria-pressed', 'true');
    toggleButton.title = 'Switch to light mode';
  } else {
    icon.className = 'fa-solid fa-moon';
    toggleButton.setAttribute('aria-pressed', 'false');
    toggleButton.title = 'Switch to dark mode';
  }
}

if (toggleButton) {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);
  updateToggleIcon();

  toggleButton.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark ? 'dark' : 'light');
    updateToggleIcon();
  });
}
