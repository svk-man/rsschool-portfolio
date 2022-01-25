const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

hamburger.addEventListener('click', function() {
  this.classList.toggle('hamburger--active');
  navigation.classList.toggle('nav--show');
});

navigation.addEventListener('click', function(event) {
  if (event.target.classList.contains('nav__link')) {
    hamburger.classList.remove('hamburger--active');
    navigation.classList.remove('nav--show');
  }
});

console.log('%cВёрстка соответствует макету. Ширина экрана 768px +48', 'color: green; font-size: 16px');
console.log('блок <header> +6');
console.log('секция hero +6');
console.log('секция skills +6');
console.log('секция portfolio +6');
console.log('секция video +6');
console.log('секция price +6');
console.log('секция contacts +6');
console.log('блок <footer> +6');
console.log('%cНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15', 'color: green; font-size: 16px');
console.log('нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5');
console.log('нет полосы прокрутки при ширине страницы от 768рх до 480рх +5');
console.log('нет полосы прокрутки при ширине страницы от 480рх до 320рх +5');
console.log('%cНа ширине экрана 768рх и меньше реализовано адаптивное меню +22', 'color: green; font-size: 16px');
console.log('при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2');
console.log('при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4');
console.log('высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4');
console.log('при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4');
console.log('бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2');
console.log('ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2');
console.log('при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4');
console.log('%cИтоговая оценка: 85', 'color: green; font-size: 16px');
