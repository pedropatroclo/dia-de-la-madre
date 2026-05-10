// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Abrazo digital
const btn      = document.getElementById('abrazoBtn');
const overlay  = document.getElementById('abrazoOverlay');
const cerrar   = document.getElementById('cerrarBtn');
const contenedor = document.getElementById('corazones');

const emojis = ['💖','💗','💕','🌸','✨','💝','🌺','💞','🥰','💓','🌷','🎀'];

function lanzarCorazones() {
  contenedor.innerHTML = '';
  for (let i = 0; i < 24; i++) {
    const el = document.createElement('span');
    el.className = 'corazon';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${Math.random() * 88}%;
      bottom: 0;
      --dur: ${1.8 + Math.random() * 2.5}s;
      animation-delay: ${Math.random() * 2}s;
    `;
    contenedor.appendChild(el);
  }
}

function abrirAbrazo() {
  overlay.classList.add('activo');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  lanzarCorazones();
}

function cerrarAbrazo() {
  overlay.classList.remove('activo');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  setTimeout(() => { contenedor.innerHTML = ''; }, 400);
}

btn.addEventListener('click', abrirAbrazo);
cerrar.addEventListener('click', cerrarAbrazo);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) cerrarAbrazo();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarAbrazo();
});
