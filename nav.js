(function() {
  var nav = [
    { label: 'Why',        url: '/why',                   type: 'top' },

    { label: 'Landscape',  url: '/landscape/',            type: 'top' },
    { label: 'OT vs ICS vs SCADA', url: '/landscape/ot-ics-scada/', type: 'child-mid' },
    { label: 'Market overview',    url: '/landscape/market-overview/', type: 'child-mid' },
    { label: 'Vendor index',       url: '/landscape/vendors/',         type: 'child-mid' },
    { label: 'Buyer personas',     url: '/landscape/buyer-personas/',  type: 'child-mid' },
    { label: 'Regulatory map',     url: '/landscape/regulatory-map/',  type: 'child-last' },

    { label: 'Tools',      url: '/tools/',                type: 'top' },
    { label: 'OT visibility',      url: '/tools/#visibility',          type: 'child-mid' },
    { label: 'Threat detection',   url: '/tools/#detection',           type: 'child-mid' },
    { label: 'Network segmentation', url: '/tools/#segmentation',      type: 'child-mid' },
    { label: 'Vuln management',    url: '/tools/#vuln',                type: 'child-mid' },
    { label: 'Remote access',      url: '/tools/#remote-access',       type: 'child-last' },

    { label: 'Comparisons', url: '/comparisons/',         type: 'top' },
    { label: 'Platform comparisons', url: '/comparisons/#platforms',   type: 'child-mid' },
    { label: 'Vendor matchups',    url: '/comparisons/#matchups',      type: 'child-last' },

    { label: 'Guides',     url: '/guides/',               type: 'top' },
    { label: 'Evaluation checklist', url: '/guides/ot-security-platform-evaluation/', type: 'child-mid' },
    { label: 'NERC CIP compliance',  url: '/guides/nerc-cip-compliance-software/',    type: 'child-mid' },
    { label: 'IEC 62443 overview',   url: '/guides/iec-62443-compliance/',            type: 'child-last' },

    { label: 'Subscribe →', url: '/subscribe',            type: 'subscribe' }
  ];

  var icons = { 'top': '', 'child-mid': '├ ', 'child-last': '└ ', 'subscribe': '' };

  var html = nav.map(function(item) {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var href = item.url.replace(/\/$/, '') || '/';
    var active = path === href ? ' active' : '';
    var cls = 'nav-' + item.type;
    var prefix = icons[item.type] || '';
    if (item.type === 'subscribe') {
      return '<a href="' + item.url + '" class="nav-subscribe">' + item.label + '</a>';
    }
    return '<a href="' + item.url + '" class="nav-item ' + cls + active + '">' + prefix + item.label + '</a>';
  }).join('\n');

  var el = document.getElementById('sidebar-nav');
  if (el) el.innerHTML = html;
})();