// Taffeta Poetry • Interactive Salon Controls
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const toggleBtn = document.getElementById('drawer-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggleBtn.innerHTML = '&#9776;';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // FAQ Accordion
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
});
