window.onload = () => {
  const catImg = document.getElementById('catImg');
  const catCounter = document.getElementById('catCounter');

  catCounter.textContent = 0;

  catImg.addEventListener('click', () => {
    catCounter.textContent = parseInt(catCounter.textContent) + 1;
  }, false);
}