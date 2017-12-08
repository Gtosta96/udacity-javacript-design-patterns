window.onload = () => {
  const catNameOne = document.getElementById('catNameOne');
  const catImgOne = document.getElementById('catImgOne');
  const catCounterOne = document.getElementById('catCounterOne');

  const catNameTwo = document.getElementById('catNameTwo');
  const catImgTwo = document.getElementById('catImgTwo');
  const catCounterTwo = document.getElementById('catCounterTwo');

  catNameOne.textContent = 'Horacio';
  catNameTwo.textContent = 'Jubileu';

  catCounterOne.textContent = 0;
  catCounterTwo.textContent = 0;

  const updateCatClickerCounter = (el) => () => el.textContent = parseInt(el.textContent) + 1;

  catImgOne.addEventListener('click', updateCatClickerCounter(catCounterOne), false);
  catImgTwo.addEventListener('click', updateCatClickerCounter(catCounterTwo), false);
}
