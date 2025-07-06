const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

/*Aparti daqui fiz diferente do video pois os botões de passar de pagina nao estavam funcionando*/

function updateSlider(index) {

    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });


    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });


    numberIndicator.textContent = (index + 1).toString().padStart(2, '0');


}

setInterval(() => {
    active = (active + 1) % total;
    updateSlider(active);
}, 5000);

prevButton.addEventListener('click', () => {
    active = (active - 1 + total) % total;
    updateSlider(active);
});

nextButton.addEventListener('click', () => {
    active = (active + 1) % total;
    updateSlider(active);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index;
        updateSlider(active);
    });
});

updateSlider(active);
