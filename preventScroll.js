const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    body.classList.remove('preventScroll');
  }, 4000);
})