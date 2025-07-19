const btnAdd = document.querySelector('.header_link-add');
const fon = document.querySelector('.nav_add-fon');
const sliderItemOne = document.querySelector('.slider_index-right-item-one');
const sliderItemTwo = document.querySelector('.slider_index-right-item-two');
const sliderItemThree = document.querySelector('.slider_index-right-item-three');

btnAdd.addEventListener('click', () => {
    fon.classList.toggle('nav_add-fon--active');
    btnAdd.classList.toggle('header_link-add--active');
})
fon.addEventListener('mouseleave', function() {
    fon.classList.remove('nav_add-fon--active');
});

const sliderItems = document.querySelectorAll('.slider_index-right-item');
let currentIndex = 0;
let intervalId;

const title = document.querySelector('.slider_index-home-title');
const text = document.querySelector('.slider_index-home-text');
const img = document.querySelector('.slider_index-home-right-img');


const slidesData = [
    {
        title: 'Хастур. Кошачьи дела',
        text: `Вдохновлённый наследием Амброуза Бирса, Г.Ф. Лавкрафта и многотысячелетней мифологии, комикс представляет собой философско-сатирическое произведение с элементами фэнтези, хоррора и детектива.`,
        imgSrc: './img/hus1.jpg'
    },
    {
        title: 'Хастур. Новое царство',
        text: `"Души не бессмертны. Ничто не бессмертно. Мы все "заложники" игр вселенной. Мы все являемся её частью, подчиняемся её законам, и все закончим существование вместе с ней".`,
        imgSrc: './img/hus2.jpg'
    },
    {
        title: 'Глазами Симбы',
        text: `Вдохновлённый наследием Амброуза Бирса, Г.Ф. Лавкрафта и многотысячелетней мифологии, комикс представляет собой философско-сатирическое произведение с элементами фэнтези, хоррора и детектива.`,
        imgSrc: './img/NoImage.png'
    }
];


function updateActiveSlide() {
    
    sliderItems.forEach((el, i) => {
        el.classList.toggle('slider_index-right-item--active', i === currentIndex);
    });

    
    const currentSlide = slidesData[currentIndex];
    title.textContent = currentSlide.title;
    text.textContent = currentSlide.text;
    img.src = currentSlide.imgSrc;
}


function startSliderInterval() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateActiveSlide(); 
    }, 5000);
}


sliderItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateActiveSlide(); 
        startSliderInterval(); 
    });
});


updateActiveSlide(); 
startSliderInterval(); 



const swiperIndexMobil = new Swiper('.swiperIndexMobil', {  
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 15,  
});

  
