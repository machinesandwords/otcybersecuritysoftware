window.SITE_CONFIG = {
  name:      "OT Cybersecurity Software",
  nameHtml:  "OT Cybersecurity <span>Software</span>",
  domain:    "otcybersecuritysoftware.com",
  tagline:   "an independent guide for OT and ICS security practitioners",
  accent:    "#B5570A",
  accentDim: "#944608",
  accentPale:"#faf0e6"
};

(function() {
  var r = document.documentElement;
  r.style.setProperty('--accent',      window.SITE_CONFIG.accent);
  r.style.setProperty('--accent-dim',  window.SITE_CONFIG.accentDim);
  r.style.setProperty('--accent-pale', window.SITE_CONFIG.accentPale);
})();