const btnAdd = document.querySelector('.header_link-add');
const fon = document.querySelector('.nav_add-fon');

btnAdd.addEventListener('click', () => {
    fon.classList.toggle('nav_add-fon--active');
    btnAdd.classList.toggle('header_link-add--active');
})
fon.addEventListener('mouseleave', function() {
    fon.classList.remove('nav_add-fon--active');
    btnAdd.classList.remove('header_link-add--active');
});