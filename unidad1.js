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

const emojis = ['💖','💗','💕','🌸','✨','💝','🌺','💞','🥰','💓','🌷','🎀'];

function lanzarCorazones() {
  contenedor.innerHTML = '';
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('span');
    el.className = 'corazon';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 88 + '%';
    el.style.bottom = '0';
    el.style.setProperty('--dur', (1.8 + Math.random() * 2.5) + 's');
    el.style.animationDelay = (Math.random() * 2) + 's';
    contenedor.appendChild(el);
  }
}

function abrir() {
  overlay.classList.add('activo');
  document.body.style.overflow = 'hidden';
  lanzarCorazones();
}

function cerrarOverlay() {
  overlay.classList.remove('activo');
  document.body.style.overflow = '';
  contenedor.innerHTML = '';
}

btn.addEventListener('click', abrir);
cerrar.addEventListener('click', cerrarOverlay);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) cerrarOverlay();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarOverlay();
});
