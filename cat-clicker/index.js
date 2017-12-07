window.onload = () => {
  const catImgOne = document.getElementById('catImgOne');
  const catCounterOne = document.getElementById('catCounterOne');

  const catImgTwo = document.getElementById('catImgTwo');
  const catCounterTwo = document.getElementById('catCounterTwo');

  catCounterOne.textContent = 0;
  catCounterTwo.textContent = 0;

  const updateCatClickerCounter = (el) => {
    return () => {
      el.textContent = parseInt(el.textContent) + 1;
    }
  }

  catImgOne.addEventListener('click', updateCatClickerCounter(catCounterOne), false);
  catImgTwo.addEventListener('click', updateCatClickerCounter(catCounterTwo), false);
}
