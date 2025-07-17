const headerMidBtn = document.querySelector('.header_mid-btn')
const headerSpan = document.querySelector('.header_mid-tx-span')
const headerMidSvg = document.querySelector('.header_mid-svg')
const priceAll = document.querySelector('.price_all')
const priceBtnTwo = document.querySelector('.price_btn-two')
headerMidBtn.onclick = () => {
    headerSpan.classList.toggle('span-visible')
    headerMidSvg.classList.toggle('svg-transform')
    if (headerMidBtn.children[0].textContent == "Развернуть") {
        headerMidBtn.children[0].textContent = "Свернуть"
    }
     else if (headerMidBtn.children[0].textContent == "Свернуть") {
        headerMidBtn.children[0].textContent = "Развернуть"
    }
}
priceBtnTwo.onclick = () => {
    priceAll.classList.toggle('price_all--active')
}