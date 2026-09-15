// Restart the CSS animation on click by reflowing the composition.
document.querySelector('.replay').addEventListener('click', () => {
  const c = document.querySelector('.composition');
  c.style.animation = 'none';
  void c.offsetWidth; // force reflow
  c.style.animation = '';
  c.querySelectorAll('.comp-piece').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
});
