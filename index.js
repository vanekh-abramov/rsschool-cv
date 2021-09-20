const anchors = document.querySelectorAll('a[href*="#"]');
const burger = document.querySelector('.burger')
const header = document.querySelector('header')
const navHeader = document.querySelector('.nav_header')
const navBurg = document.querySelector('.nav_header-burger')



for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
    header.classList.toggle('header-active')
    if(burger.classList.contains('burger_active')) {
        navBurg.style.display = 'flex'
    }else{
        navBurg.style.display = 'none'
    }
})

console.log('Самооценка 150 / 160')
console.log('1) вёрстка валидная +10 ')
console.log('2) вёрстка семантическая +20 (В коде страницы присутствуют семантические теги HTML5 footer, header, main, nav, section, используются заголовки h1-h6, 1 - h1.)')
console.log('3) для оформления СV используются css-стили +10 ')
console.log('4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10')
console.log('5) вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10')
console.log('6) есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.')
console.log('7) на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут Alt')
console.log('8) контакты для связи и перечень навыков оформлены в виде списка ul > li +10')
console.log('9) CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10')
console.log('10) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода используется js-библиотека, highlight.js +10')
console.log('11) CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10')
console.log('12) CV выполнено на английском языке +10')
console.log('13) выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10')
console.log('14) видеорезюме автора CV на английском языке -10 (отсутствует)')
console.log('15) Dизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10')