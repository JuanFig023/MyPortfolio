// Mobile hamburger menu toggle
const btn  = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Close when any nav link is tapped
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menu.classList.add('hidden'))
);
