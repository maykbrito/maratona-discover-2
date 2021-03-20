import Modal from './modal.js';

var modal = Modal({ gsap })

document
  .querySelector('.open-modal')
  .addEventListener('click', modal.open)
