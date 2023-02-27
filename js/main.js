'use strict'

/* array */

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

/* array */

const slider = document.querySelector('.slider')

let active = 0

let items_content = '';

/* ciclo immagini */

for ( let i = 0; i < imgs.length; i++) {
    console.log(imgs[i])
    items_content += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`
}

/* ciclo immagini */

slider.innerHTML = slider.innerHTML + items_content;

/* aggiunta class show per mostrare l'immagine */

document.querySelector('.item').classList.add('show')

/* aggiunta class show per mostrare l'immagine */

/* variabili button  */

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

/* variabili button  */

/* variabile items per prendere tutte le immagini */

const items = document.querySelectorAll('.item')
console.log(items)

/* variabile items per prendere tutte le immagini */

/* evento click */

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

/* evento click */