(function() {
  var WORKER_URL = 'https://newsletter.otcybersecuritysoftware.com';

  var block = `
    <div class="newsletter-block">
      <div class="newsletter-label">STAY CURRENT</div>
      <p class="newsletter-copy">Independent analysis on OT and ICS security software. No vendor influence. Delivered when it matters.</p>
      <form class="newsletter-form" id="newsletter-form">
        <input type="email" id="newsletter-email" placeholder="your@email.com" required autocomplete="email">
        <button type="submit">Subscribe</button>
      </form>
      <div class="newsletter-msg" id="newsletter-msg"></div>
    </div>
  `;

  var footer = document.querySelector('footer');
  if (footer) footer.insertAdjacentHTML('beforebegin', block);

  document.addEventListener('submit', function(e) {
    if (e.target.id !== 'newsletter-form') return;
    e.preventDefault();
    var email = document.getElementById('newsletter-email').value;
    var msg   = document.getElementById('newsletter-msg');
    msg.textContent = 'Subscribing...';
    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      msg.textContent = data.success
        ? 'You are subscribed.'
        : 'Something went wrong. Try again.';
    })
    .catch(function() {
      msg.textContent = 'Could not connect. Try again later.';
    });
  });
})();