let testIdx = 0;
const testCount = 3;
const testSlider = document.getElementById('testSlider');
function slideTest(dir) {
  if (!testSlider) return;
  testIdx = (testIdx + dir + testCount) % testCount;
  testSlider.style.transform = `translateX(-${testIdx * 100}%)`;
}
if (testSlider) {
  setInterval(() => slideTest(1), 6000);
}
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
}
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
});
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
lucide.createIcons();
