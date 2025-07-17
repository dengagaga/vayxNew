




// TRANSITIONS

const headerReadLeft = document.querySelector('.header_read-left')
const headerReadLeft2 = document.querySelector('.header_read-left-2')
const swipers = document.querySelector('.swiper-active')
const containerRead2 = document.querySelector('.container_read-2')
headerReadLeft.addEventListener('click', () => {
  swipers.classList.add('none')
  containerRead2.classList.remove('none')
})
headerReadLeft2.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
})

// /TRANSITIONS
// /CLICK
const headerReadTheOne = document.querySelector('.header_read-theOne')
const swiperButtonsTheOne = document.querySelector('.swiper-buttons-theOne')
const swiperScrollbarTheOne = document.querySelector('.swiper-scrollbar-theOne')
window.addEventListener('click', (event) => {
  if (event.target.parentElement.dataset.active == 'act') {
    return
  }
  if (event.target.dataset.active == 'act') {
    return
  }
  containerReadSvg.classList.toggle('opacity')
  headerReadTheOne.classList.toggle('opacity')
  swiperScrollbarTheOne.classList.toggle('opacity')
  swiperButtonsTheOne.classList.toggle('opacity')
})

// /CLICK
  
// MODAL
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const containerReadSvg = document.querySelector('.container_read-svg-abs')
containerReadSvg.addEventListener('click', () => {
  modal.classList.add('open')
  headerReadTheOne.classList.add('opacity')
  swiperScrollbarTheOne.classList.add('opacity')
  swiperButtonsTheOne.classList.add('opacity')
})
close.addEventListener('click', () => {
  modal.classList.remove('open')
  headerReadTheOne.classList.remove('opacity')
  swiperScrollbarTheOne.classList.remove('opacity')
  swiperButtonsTheOne.classList.remove('opacity')
})
// /MODAL
const swiperButtNext = document.querySelector('.swiper-butt-next')
swiperButtNext.addEventListener('click', () => {
  if(swiperButtNext.classList.contains('swiper-button-disabled')) {
    document.location.href = "ReadTwo.html"
  }
})


// Переключение на слайды
const sw1 = document.querySelector('.sw1')
const sw2 = document.querySelector('.sw2')
const sw3 = document.querySelector('.sw3')
const sw4 = document.querySelector('.sw4')
const sw5 = document.querySelector('.sw5')
const sw6 = document.querySelector('.sw6')
const swiperButtons = document.querySelector('.swiper-buttons')

sw1.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(0);

})
sw2.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(1);

})
sw3.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(2);

})
sw4.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(3);

})
sw5.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(4);

})
sw6.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  swiper.slideTo(5);

})
// /Переключение на слайды




// F11

var fullpage = document.getElementById("fullpage")
console.dir(fullpage)

fullpage.onclick = function(){   
  if (fullpage.children[1].textContent == 'На весь экран') {
    fullpage.children[1].innerHTML='Выйти из полноэкранного режима'  

  } 
  else if (fullpage.children[1].textContent == 'Выйти из полноэкранного режима') {
    fullpage.children[1].innerHTML='На весь экран'  
  }
  if(fullpage.className == 'cur'){
    fullpage.classList = ""
    exitFullScreen()
    
  }else{
    fullpage.classList = "cur"
    fullScreen(document.documentElement)
  }
}

function fullScreen(el) {
  var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
  wscript;
  
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
    return;
  }
  
  if (typeof window.ActiveXObject != "undefined") {
    wscript = new ActiveXObject("WScript.Shell");
    if (wscript) {
      wscript.SendKeys("{F11}");
    }
  }
}

function exitFullScreen(el) {
  var el = document,
  cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
  wscript;
  
  if (typeof cfs != "undefined" && cfs) {
    cfs.call(el);
    return;
  }
  
  if (typeof window.ActiveXObject != "undefined") {
    wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
// /F11

// Modal Переходы
const swiperSlideImg = document.querySelectorAll('.swiper-slide_img')
const swiperSlide = document.querySelectorAll('.swiper-slide')
const modalBoxBotLink = document.getElementById('modal_box-bot-link')
modalBoxBotLink.addEventListener('click', () => {
  if (modalBoxBotLink.children[1].textContent == 'Использовать зум') {
    swiperSlideImg.forEach(img => {
      img.style.transform = "scale(1.4)"
      modal.classList.remove('open')
      containerReadSvg.classList.add('opacity')
    })
    swiperSlide.forEach(slide => {
      slide.style.overflow='hidden'
    })
    modalBoxBotLink.children[1].textContent = 'Убрать зум'
  } else {
    swiperSlideImg.forEach(img => {
      img.style.transform = "scale(1)"
      modal.classList.remove('open')
      containerReadSvg.classList.add('opacity')
    })
    swiperSlide.forEach(slide => {
      slide.style.overflow='visible'
    })
    modalBoxBotLink.children[1].textContent = 'Использовать зум'
  }
  
})
// /Modal Переходы