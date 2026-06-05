(function() {
  var nav = [
    { label: 'Why',        url: '/why/',                  type: 'top' },

    { label: 'Landscape',  url: '/landscape/',            type: 'top' },
    { label: 'Market overview',    url: '/landscape/',             type: 'child-mid' },
    { label: 'Vendor index',       url: '/landscape/vendors/',     type: 'child-mid' },
    { label: 'CPS: OT, ICS, SCADA', url: '/landscape/ot-ics-scada/', type: 'child-last' },

    { label: 'Tools',      url: '/tools/',                type: 'top' },
    { label: 'Vendor comparison',  url: '/tools/vendor-comparison/', type: 'child-mid' },
    { label: 'RFP Evaluation Kit',   url: '/tools/rfp-evaluation-kit/', type: 'child-last' },

    { label: 'Comparisons', url: '/comparisons/',         type: 'top' },

    { label: 'Guides',     url: '/guides/',               type: 'top' },
    { label: 'Platform evaluation',url: '/guides/ot-security-platform-evaluation/', type: 'child-last' },

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
