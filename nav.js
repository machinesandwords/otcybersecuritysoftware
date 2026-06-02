/**
 * nav.js — Sidebar navigation for industrialiotsoftware.com
 * Copy of _master/nav.js with site-specific links filled in.
 * When master nav.js structure changes, update this file too.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Why</div>
      <a href="/why" class="nav-item depth-0">Manifesto</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape" class="nav-item depth-0">Overview</a>
      <a href="/landscape/connectivity" class="nav-item depth-1">├ Connectivity &amp; protocols</a>
      <a href="/landscape/device-management" class="nav-item depth-1">├ Device management</a>
      <a href="/landscape/data-platforms" class="nav-item depth-1">├ Data &amp; analytics platforms</a>
      <a href="/landscape/integration" class="nav-item depth-1">├ Integration &amp; middleware</a>
      <a href="/landscape/security" class="nav-item depth-1 last">└ OT/IT security</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools" class="nav-item depth-0">All tools</a>
      <a href="/tools/platforms" class="nav-item depth-1">├ IIoT platforms</a>
      <a href="/tools/device-management" class="nav-item depth-1">├ Device management</a>
      <a href="/tools/analytics" class="nav-item depth-1 last">└ Analytics &amp; visualization</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons/aws-iot-vs-azure-iot" class="nav-item depth-0">AWS IoT vs. Azure IoT</a>
      <a href="/comparisons/ignition-vs-kepware" class="nav-item depth-0">Ignition vs. Kepware</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/iiot-stack-101" class="nav-item depth-0">IIoT stack 101</a>
      <a href="/guides/choosing-a-platform" class="nav-item depth-0">Choosing a platform</a>
      <a href="/guides/ot-it-convergence" class="nav-item depth-0">OT/IT convergence</a>
      <a href="/guides/brownfield-deployment" class="nav-item depth-0">Brownfield deployment</a>
      <a href="/guides/data-historian-vs-cloud" class="nav-item depth-0">Historian vs. cloud</a>
      <a href="/guides/when-to-upgrade" class="nav-item depth-0">When to upgrade your stack</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/subscribe" class="nav-item depth-0 nav-subscribe">Subscribe →</a>
    </div>
  `;

  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;
    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }
})();
