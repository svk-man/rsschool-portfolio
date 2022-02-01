import i18nObj from "./translate.js";

let lang = 'en';
let theme = 'black';
function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    getTranslate(lang);
  }

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    getTheme(theme);
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

const langSwitcher = document.querySelector('.lang-switcher');
langSwitcher.addEventListener('click', changeLang);

function changeLang(event) {
  const currentLangSwitcherBtn = event.target;
  const isCurrentLangSwitcherBtn = currentLangSwitcherBtn.classList.contains('lang-switcher__btn');
  if (isCurrentLangSwitcherBtn) {
    const currentLang = currentLangSwitcherBtn.dataset.lang;
    getTranslate(currentLang);
    lang = currentLang;

    const langSwitcherBtns = langSwitcher.querySelectorAll('.lang-switcher__btn');
    langSwitcherBtns.forEach(langSwitcherBtn => { langSwitcherBtn.classList.remove('lang-switcher__btn--active'); });

    currentLangSwitcherBtn.classList.add('lang-switcher__btn--active');
  }
}

function getTranslate(lang = 'ru') {
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(i18nElement => {
    const i18nElementKey = i18nElement.dataset.i18n;
    const i18nElementValue = i18nObj[lang][i18nElementKey];
    const isI18nElementKeyExists = i18nElementValue !== undefined;
    if (isI18nElementKeyExists) {
      if (i18nElement.placeholder) {
        i18nElement.placeholder = i18nElementValue;
        i18nElement.textContent = '';
      } else if (i18nElement.value) {
        i18nElement.value = i18nElementValue;
        i18nElement.textContent = '';
      } else {
        i18nElement.textContent = i18nElementValue;
      }
    }
  });
}

const themeChangeButton = document.querySelector('.theme-change');
themeChangeButton.addEventListener('click', changeTheme);

function changeTheme(event) {
  const isWhiteTheme = event.target.classList.contains('white-theme');
  theme = isWhiteTheme ? 'black' : 'white';
  getTheme(theme);
}

function getTheme(theme = 'white') {
  const isWhiteTheme = theme === 'white';

  const whiteThemeElementSelectors = ['body', '.hero-section', '.header__container', '.nav__link', '.lang-switcher',
  '.lang-switcher__btn', '.btn', '.section-title', '.section-title__inner', '.skills-section__item',
  '.price-section__item-price', '.contacts-section', '.contacts-section__field', '.footer__link', '.socials__link-icon',
  '.theme-change', '.hamburger', '.nav'];
  const whiteThemeElements = document.querySelectorAll(whiteThemeElementSelectors.join(', '));
  whiteThemeElements.forEach(whiteThemeElement => { 
    isWhiteTheme ? whiteThemeElement.classList.add('white-theme') : whiteThemeElement.classList.remove('white-theme');
  });

  const logoImg = document.querySelector('.logo__img');
  logoImg.src = `./assets/svg/logo${(isWhiteTheme) ? '-white' : ''}.svg`;

  const priceSectionItemBtns = document.querySelectorAll('.price-section__item-btn');
  priceSectionItemBtns.forEach(priceSectionItemBtn => {
    if (!isWhiteTheme) {
      priceSectionItemBtn.classList.remove('btn--light');
      priceSectionItemBtn.classList.add('btn--dark');
    } else {
      priceSectionItemBtn.classList.remove('btn--dark');
      priceSectionItemBtn.classList.add('btn--light');
    }
  });
}

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

const portfolioButtonsParent = document.querySelector('.portfolio-section__buttons');
const portfolioPhotos = document.querySelectorAll('.portfolio-section__photo');
portfolioButtonsParent.addEventListener('click', changeImages);

function changeImages(event) {
  const portfolioButton = event.target;
  const isPortfolioButton = event.target.classList.contains('portfolio-section__button');
  if(isPortfolioButton) {
    const season = portfolioButton.dataset.season;
    portfolioPhotos.forEach((item, index) => { item.src = `./assets/img/photos/${season}/${index + 1}.jpg`} );

    snowfallSeason = season;
    setSnowfall(false);
    if (snowfallPlay) {
      setSnowfall(true);
    }

    const portfolioButtons = Array.from(portfolioButtonsParent.children);
    portfolioButtons.forEach(item => { item.classList.remove('portfolio-section__button--active'); });
    portfolioButton.classList.add('portfolio-section__button--active');
  }
}

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
  seasons.forEach(item => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/photos/${item}/${i}.jpg`;
    }
  });
}

preloadImages();

const animateButton = function(event) {
  event.preventDefault;

  event.target.classList.remove('animate');
  event.target.classList.add('animate');
  setTimeout(function(){
    event.target.classList.remove('animate');
  },700);
};

const bubblyButtons = document.querySelectorAll('.btn--bubbly');
bubblyButtons.forEach(bubblyButton => bubblyButton.addEventListener('click', animateButton));

let snowfallPlay = false;
let snowfallSeason = 'autumn';
const snowfallChangeButton = document.querySelector('.snowfall-change');
snowfallChangeButton.addEventListener('click', changeSnowfall);

function changeSnowfall(event) {
  snowfallPlay = !snowfallPlay;
  setSnowfall(snowfallPlay);
}

function setSnowfall(play = true) {
  const snowfallElement = document.querySelector('.snowfall');

  if (play) {
    const snowfallSize = 3;
    const snowfallIcons = {
      'autumn': ['🍂', '🍁', '🍄', '🦔', '🌧'],
      'spring': ['🌼', '🌸', '🌳', '⛅️', '🐦'],
      'summer': ['🐞', '🌞', '🍉', '🍓', '🐝'],
      'winter': ['⛄️', '❄️', '🎅', '🎄', '🦌'],
    };

    let snowfallElementHtml = '';
    for (let i = 0; i < snowfallSize; i++) {
      snowfallIcons[snowfallSeason].forEach(snowfallIcon => {
        snowfallElementHtml += `<snowflake><span>${snowfallIcon}</span>️️</snowflake>`;
      });
    }

    snowfallElement.innerHTML = snowfallElementHtml;
    document.body.append(snowfallElement);
  } else {
    snowfallElement.innerHTML = '';
  }
}

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
