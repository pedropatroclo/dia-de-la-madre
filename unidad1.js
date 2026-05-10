// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Abrazo digital
const btn = document.getElementById('abrazoBtn');
const overlay = document.getElementById('abrazoOverlay');
const cerrar = document.getElementById('cerrarBtn');
const contenedor = document.getElementById('corazones');

const emojis = ['💖','💗','💕','🌸','✨','💝','🌺','💞','🥰','💓'];

function lanzarCorazones() {
  contenedor.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('span');
    el.className = 'corazon';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 90 + '%';
    el.style.bottom = '0';
    el.style.setProperty('--dur', (1.5 + Math.random() * 2) + 's');
    el.style.animationDelay = (Math.random() * 1.5) + 's';
    contenedor.appendChild(el);
  }
}

btn.addEventListener('click', () => {
  overlay.classList.add('activo');
  lanzarCorazones();
});

cerrar.addEventListener('click', () => {
  overlay.classList.remove('activo');
  contenedor.innerHTML = '';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('activo');
    contenedor.innerHTML = '';
  }
});
