/**
 * nav.js — Shared sidebar navigation
 * otcybersecuritysoftware.com
 * Injected into every page. Edit once, updates everywhere.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Why</div>
      <a href="/why/" class="nav-item depth-0">The information problem</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape/" class="nav-item depth-0">Market overview</a>
      <a href="/landscape/vendors/" class="nav-item depth-1">├ Vendor index</a>
      <a href="/landscape/market-direction/" class="nav-item depth-1">├ Market direction</a>
      <a href="/landscape/regulatory-map/" class="nav-item depth-1">└ Regulatory map</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools/" class="nav-item depth-0">All tools</a>
      <a href="/tools/vendor-comparison/" class="nav-item depth-1">├ Vendor comparison</a>
      <a href="/tools/rfp-evaluation-kit/" class="nav-item depth-1">├ RFP Evaluation Kit</a>
      <a href="/tools/asset-scoping-tool/" class="nav-item depth-1">└ Asset scoping tool</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons/" class="nav-item depth-0">All comparisons</a>
      <a href="/comparisons/dragos-vs-claroty/" class="nav-item depth-1">├ Dragos vs. Claroty</a>
      <a href="/comparisons/nozomi-vs-claroty/" class="nav-item depth-1">├ Nozomi vs. Claroty</a>
      <a href="/comparisons/" class="nav-item depth-1">└ More &rarr;</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/" class="nav-item depth-0">All guides</a>
      <a href="/guides/security-platform-evaluation/" class="nav-item depth-1">├ Platform evaluation</a>
      <a href="/guides/nis2-nerc-cip-audit-readiness/" class="nav-item depth-1">├ NIS2 and NERC CIP</a>
      <a href="/guides/oem-remote-access/" class="nav-item depth-1">├ OEM remote access</a>
      <a href="/guides/" class="nav-item depth-1">└ More &rarr;</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/subscribe" class="nav-item depth-0 nav-subscribe">Subscribe &rarr;</a>
    </div>
  `;

  // Inject into element with id="sidebar-nav"
  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;

    // Auto-highlight active link based on current path
    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      // Exact match, or startsWith for section pages — but skip "More" links
      if (!link.textContent.includes('More')) {
        if (href === path || (href !== '/' && path.startsWith(href))) {
          link.classList.add('active');
        }
      }
    });
  }

})();