let testIdx = 0;
const testCount = 3;
function slideTest(dir) {
  testIdx = (testIdx + dir + testCount) % testCount;
  document.getElementById('testSlider').style.transform = `translateX(-${testIdx * 100}%)`;
}
setInterval(() => slideTest(1), 6000);
document.getElementById('mobileToggle').addEventListener('click', () => {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('hidden');
});
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
});
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});
lucide.createIcons();