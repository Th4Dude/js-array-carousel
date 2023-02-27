{/* <div class="item show"><img src="img/01.webp" alt=""></div>
            <div class="item"><img src="img/02.webp" alt=""></div>
            <div class="item"><img src="img/03.webp" alt=""></div>
            <div class="item"><img src="img/04.webp" alt=""></div>
            <div class="item"><img src="img/05.webp" alt=""></div> */}

'use strict'

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

let items_content = '';
let active = 0

const slider = document.querySelector('.slider')

for (i = 0; i < imgs.length; i++) {
    console.log(imgs[i])
    items_content += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`
}

slider.innerHTML = slider.innerHTML + items_content;
document.querySelector('.item').classList.add('show')

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const items = document.querySelectorAll('.item')
console.log(items)


prev.addEventListener('click', function () {
    if (active > 0) {
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
})

next.addEventListener('click', function () {

    if (active < items.length - 1) {
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
});