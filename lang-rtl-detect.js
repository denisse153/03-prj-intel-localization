// Detects changes to the <html> lang attribute and applies RTL if needed

(function() {
  function applyRtlIfNeeded() {
    const html = document.documentElement;
    // List of RTL language codes
    const rtlLangs = ['ar', 'he', 'fa', 'ur'];
    const lang = (html.getAttribute('lang') || '').toLowerCase().split('-')[0];
    if (rtlLangs.includes(lang)) {
      html.setAttribute('dir', 'rtl');
      document.body.style.direction = 'rtl';
    } else {
      html.setAttribute('dir', 'ltr');
      document.body.style.direction = 'ltr';
    }
  }

  // Observe changes to the <html> lang attribute
  const observer = new MutationObserver(applyRtlIfNeeded);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Initial check
  applyRtlIfNeeded();
})();
