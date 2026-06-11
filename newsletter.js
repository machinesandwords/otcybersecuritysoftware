(function () {
  var WORKER_URL = 'https://newsletter.otcybersecuritysoftware.com';

  var emailInput = document.getElementById('nl-email');
  var submitBtn  = document.getElementById('nl-submit');
  var msgEl      = document.getElementById('nl-msg');

  if (!emailInput || !submitBtn) return;

  function attempt() {
    var email = emailInput.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msgEl.style.display = 'block';
      msgEl.textContent = 'Please enter a valid email address.';
      return;
    }

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending\u2026';
    msgEl.textContent     = '';

    fetch(WORKER_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email: email, group_id: '189858333791880417' }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.message === 'Subscribed') {
          msgEl.style.display   = 'block';
          msgEl.textContent     = 'You\u2019re subscribed.';
          emailInput.value      = '';
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Subscribe';
        } else {
          msgEl.style.display   = 'block';
          msgEl.textContent     = 'Something went wrong. Please try again.';
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Subscribe';
        }
      })
      .catch(function () {
        msgEl.style.display   = 'block';
        msgEl.textContent     = 'Could not connect. Please try again.';
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Subscribe';
      });
  }

  submitBtn.addEventListener('click', attempt);
  emailInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') attempt();
  });
})();