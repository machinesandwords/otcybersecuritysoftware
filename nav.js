(function() {
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  function active(url) {
    var href = url.replace(/\/$/, '') || '/';
    return path === href ? ' active' : '';
  }

  var html = '';

  // ── Why ──────────────────────────────────────────────────
  html += '<div class="nav-section">';
  html += '<div class="nav-section-label">Why</div>';
  html += '<a href="/why/" class="nav-item depth-0' + active('/why/') + '">The information problem</a>';
  html += '</div>';

  html += '<div class="nav-divider"></div>';

  // ── Landscape ─────────────────────────────────────────────
  html += '<div class="nav-section">';
  html += '<div class="nav-section-label">Landscape</div>';
  html += '<a href="/landscape/" class="nav-item depth-0' + active('/landscape/') + '">Market overview</a>';
  html += '<a href="/landscape/vendors/" class="nav-item depth-1' + active('/landscape/vendors/') + '">&#x251C; Vendor index</a>';
  html += '<a href="/landscape/cps-ot-ics-scada/" class="nav-item depth-1' + active('/landscape/cps-ot-ics-scada/') + '">&#x251C; Market direction</a>';
  html += '<a href="/landscape/regulatory-map/" class="nav-item depth-1' + active('/landscape/regulatory-map/') + '">&#x2514; Regulatory map</a>';
  html += '</div>';

  html += '<div class="nav-divider"></div>';

  // ── Tools ─────────────────────────────────────────────────
  html += '<div class="nav-section">';
  html += '<div class="nav-section-label">Tools</div>';
  html += '<a href="/tools/" class="nav-item depth-0' + active('/tools/') + '">All tools</a>';
  html += '<a href="/tools/vendor-comparison/" class="nav-item depth-1' + active('/tools/vendor-comparison/') + '">&#x251C; Vendor comparison</a>';
  html += '<a href="/tools/rfp-evaluation-kit/" class="nav-item depth-1' + active('/tools/rfp-evaluation-kit/') + '">&#x251C; RFP Evaluation Kit</a>';
  html += '<a href="/tools/asset-scoping-tool/" class="nav-item depth-1' + active('/tools/asset-scoping-tool/') + '">&#x2514; Asset scoping tool</a>';
  html += '</div>';

  html += '<div class="nav-divider"></div>';

  // ── Comparisons ───────────────────────────────────────────
  html += '<div class="nav-section">';
  html += '<div class="nav-section-label">Comparisons</div>';
  html += '<a href="/comparisons/" class="nav-item depth-0' + active('/comparisons/') + '">All comparisons</a>';
  html += '<a href="/comparisons/dragos-vs-claroty/" class="nav-item depth-1' + active('/comparisons/dragos-vs-claroty/') + '">&#x251C; Dragos vs. Claroty</a>';
  html += '<a href="/comparisons/nozomi-vs-claroty/" class="nav-item depth-1' + active('/comparisons/nozomi-vs-claroty/') + '">&#x251C; Nozomi vs. Claroty</a>';
  html += '<a href="/comparisons/" class="nav-item depth-1">&#x2514; More &rarr;</a>';
  html += '</div>';

  html += '<div class="nav-divider"></div>';

  // ── Guides ────────────────────────────────────────────────
  html += '<div class="nav-section">';
  html += '<div class="nav-section-label">Guides</div>';
  html += '<a href="/guides/" class="nav-item depth-0' + active('/guides/') + '">All guides</a>';
  html += '<a href="/guides/security-platform-evaluation/" class="nav-item depth-1' + active('/guides/security-platform-evaluation/') + '">&#x251C; Platform evaluation</a>';
  html += '<a href="/guides/nis2-nerc-cip-audit-readiness/" class="nav-item depth-1' + active('/guides/nis2-nerc-cip-audit-readiness/') + '">&#x251C; NIS2 and NERC CIP</a>';
  html += '<a href="/guides/oem-remote-access/" class="nav-item depth-1' + active('/guides/oem-remote-access/') + '">&#x251C; OEM remote access</a>';
  html += '<a href="/guides/" class="nav-item depth-1">&#x2514; More &rarr;</a>';
  html += '</div>';

  html += '<div class="nav-divider"></div>';

  // ── Subscribe ─────────────────────────────────────────────
  html += '<a href="/subscribe" class="nav-item nav-subscribe">Subscribe &rarr;</a>';

  var el = document.getElementById('sidebar-nav');
  if (el) el.innerHTML = html;
})();