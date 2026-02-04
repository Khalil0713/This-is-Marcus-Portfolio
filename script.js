// simple active menu highlight
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// About Me Modal
const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const closeBtn = document.querySelector('.close');

// Open modal when button is clicked
aboutBtn.addEventListener('click', () => {
  aboutModal.style.display = 'block';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});
