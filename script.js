(() => {
  'use strict';
  const links = [...document.querySelectorAll('.section-nav a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;

  function updateCurrentSection() {
    scheduled = false;
    let activeIndex = 0;
    const threshold = window.innerHeight * 0.25;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= threshold) activeIndex = index;
    });
    // A short final section may not reach the viewport threshold.
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      activeIndex = links.length - 1;
    }
    links.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
  }
  // Native anchors work without JavaScript; this only highlights the section.
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  if (document.fonts) document.fonts.ready.then(scheduleUpdate);
  updateCurrentSection();
})();
