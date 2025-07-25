const headerMidBtn = document.querySelector('.header_mid-btn')
const headerSpan = document.querySelector('.header_mid-tx-span')
const headerMidSvg = document.querySelector('.header_mid-svg')
const priceAll = document.querySelector('.price_all')
const priceBtnTwo = document.querySelector('.price_btn-two')
// headerMidBtn.onclick = () => {
    //     headerSpan.classList.toggle('span-visible')
    //     headerMidSvg.classList.toggle('svg-transform')
    //     if (headerMidBtn.children[0].textContent == "Развернуть") {
        //         headerMidBtn.children[0].textContent = "Свернуть"
        //     }
        //      else if (headerMidBtn.children[0].textContent == "Свернуть") {
            //         headerMidBtn.children[0].textContent = "Развернуть"
            //     }
            // }
const btnAdd = document.querySelector('.header_link-add');
const fon = document.querySelector('.nav_add-fon');
btnAdd.addEventListener('click', () => {
    fon.classList.toggle('nav_add-fon--active');
    btnAdd.classList.toggle('header_link-add--active');
})
fon.addEventListener('mouseleave', function() {
    fon.classList.remove('nav_add-fon--active');
    btnAdd.classList.toggle('header_link-add--active');
});
priceBtnTwo.onclick = () => {
    priceAll.classList.toggle('price_all--active')
}