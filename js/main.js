const xhardware = document.getElementById('x-hardware');
const toMate = document.getElementById('to-mate');
const countries = document.getElementById('countries');
const restaurant = document.getElementById('restaurant');
const photo = document.getElementById('photo');
const basic = document.getElementById('basic');

/* Xhardware */
xhardware.addEventListener('mouseover', () => {
    const p = document.getElementById('to-xhardware');
    p.classList.add('active');
});
xhardware.addEventListener('mouseout', () => {
    const p = document.getElementById('to-xhardware')
    p.classList.remove('active')
});
/* To-Mate */
toMate.addEventListener('mouseover', () => {
    const p = document.getElementById('to-to-mate');
    p.classList.add('active');
});
toMate.addEventListener('mouseout', () => {
    const p = document.getElementById('to-to-mate');
    p.classList.remove('active');
});
/* Countries */
countries.addEventListener('mouseover', () => {
    const p = document.getElementById('to-countries');
    p.classList.add('active');
});
countries.addEventListener('mouseout', () => {
    const p = document.getElementById('to-countries');
    p.classList.remove('active');
});
/* Restaurant X */
restaurant.addEventListener('mouseover', () => {
    const p = document.getElementById('to-restaurant');
    p.classList.add('active');
});
restaurant.addEventListener('mouseout', () => {
    const p = document.getElementById('to-restaurant');
    p.classList.remove('active');
});
/* Photograph */
photo.addEventListener('mouseover', () => {
    const p = document.getElementById('to-photo');
    p.classList.add('active');
});
photo.addEventListener('mouseout', () => {
    const p = document.getElementById('to-photo');
    p.classList.remove('active');
});
/* Coca-Cola */
basic.addEventListener('mouseover', () => {
    const p = document.getElementById('to-basic');
    p.classList.add('active');
});
basic.addEventListener('mouseout', () => {
    const p = document.getElementById('to-basic');
    p.classList.remove('active');
});