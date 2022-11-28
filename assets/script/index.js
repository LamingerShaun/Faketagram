'use strict';

let modal = document.querySelector('.modal'),
openModal = document.querySelector('.user'),
closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function() {
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})