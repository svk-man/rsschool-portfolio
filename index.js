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

console.log('%cВёрстка валидная +10', 'color: green; font-size: 16px');
console.log('для проверки валидности вёрстки используйте сервис https://validator.w3.org/');
console.log('валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.');
console.log('если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований');
console.log('%cВёрстка семантическая +20', 'color: green; font-size: 16px');
console.log('В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):');
console.log('<header>, <main>, <footer> +2');
console.log('шесть элементов <section> (по количеству секций) +2');
console.log('только один заголовок <h1> +2');
console.log('пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2');
console.log('один элемент <nav> (панель навигации) +2');
console.log('два списка ul > li > a (панель навигации, ссылки на соцсети) +2');
console.log('десять кнопок <button> +2');
console.log('два инпута: <input type="email"> и <input type="tel"> +2');
console.log('один элемент <textarea> +2');
console.log('три атрибута placeholder +2');
console.log('%cВёрстка соответствует макету +48', 'color: green; font-size: 16px');
console.log('блок <header> +6');
console.log('секция hero +6');
console.log('секция skills +6');
console.log('секция portfolio +6');
console.log('секция video +6');
console.log('секция price +6');
console.log('секция contacts +6');
console.log('блок <footer> +6');
console.log('%cТребования к css + 12', 'color: green; font-size: 16px');
console.log('для построения сетки используются флексы или гриды +2');
console.log('при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2');
console.log('фоновый цвет тянется на всю ширину страницы +2');
console.log('иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2');
console.log('изображения добавлены в формате .jpg +2');
console.log('есть favicon +2');
console.log('%cИнтерактивность, реализуемая через css +20', 'color: green; font-size: 16px');
console.log('плавная прокрутка по якорям +5');
console.log('ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5');
console.log('интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5');
console.log('обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5');
console.log('%cИтоговая оценка: +120', 'color: green; font-size: 16px');
