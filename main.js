// Typed.js initialization for profession text

  document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typed-text', {
      strings: ['Frontend Developer', 'React Enthusiast', 'Web Designer', 'UI/UX Lover'],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      backDelay: 1500,
      showCursor: true,
      cursorChar: '|',
    });
  });


// Dark mode toggle button event listener
const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon text between sun and moon
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
