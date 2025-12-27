const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

const savedTheme = localStorage.getItem('data-theme');
if(savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('data-theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme){
    if(theme === "dark") {
        themeIcon.classList.remove('sun');
        themeIcon.classList.add('moon');
    } else {
        themeIcon.classList.remove('moon');
        themeIcon.classList.add('sun');
    }
}



const words = ["Web Developer", "IT Student"];
let wordIndex = 0;
let charIndex = words[0].length;
let deleting = true;

const span = document.getElementById("student");

setInterval(() => {
  if (deleting) {
    span.textContent = words[wordIndex].slice(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  } else {
    span.textContent = words[wordIndex].slice(0, charIndex++);

    if (charIndex > words[wordIndex].length) {
      deleting = true;
      charIndex = words[wordIndex].length;
    }
  }
}, 150);