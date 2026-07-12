// Shichi — user/login page preview
// No account system exists yet. This just handles the tab toggle and
// shows a friendly confirmation after the waitlist form — nothing is
// actually saved or sent anywhere.

const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const authSubmit = document.getElementById('authSubmit');

tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  authSubmit.textContent = 'Log in — coming soon';
});

tabSignup.addEventListener('click', () => {
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  authSubmit.textContent = 'Create account — coming soon';
});

const waitlistForm = document.getElementById('waitlistForm');
const waitlistConfirm = document.getElementById('waitlistConfirm');

waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // No backend yet — this only updates the UI so the flow feels real.
  waitlistForm.classList.add('hide');
  waitlistConfirm.classList.add('show');
});
