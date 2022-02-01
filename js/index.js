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

console.log('%cСмена изображений в секции `portfolio` +25', 'color: green; font-size: 16px');
console.log('при кликах по кнопкам `Winter`, `Spring`, `Summer`, `Autumn` в секции `portfolio` отображаются изображения из папки с соответствующим названием +20');
console.log('кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5');
console.log('%cПеревод страницы на два языка +25', 'color: green; font-size: 16px');
console.log('при клике по надписи `ru` англоязычная страница переводится на русский язык +10');
console.log('при клике по надписи `en` русскоязычная страница переводится на английский язык +10');
console.log('надписи `en` или `ru`, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5');
console.log('%cПереключение светлой и тёмной темы +25', 'color: green; font-size: 16px');
console.log('Выбрана 2 макет');
console.log('На страницу добавлен переключатель при клике по которому:');
console.log('-   тёмная тема приложения сменяется светлой +10');
console.log('-   светлая тема приложения сменяется тёмной +10');
console.log('-   после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5');
console.log('%cДополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5', 'color: green; font-size: 16px');
console.log('%cДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5', 'color: green; font-size: 16px');
console.log('%cДополнительный функционал: снегопад в зависимости от сезона, выбранного в портфолио', 'color: green; font-size: 16px');
console.log('%cИтоговая оценка: 85', 'color: green; font-size: 16px');
