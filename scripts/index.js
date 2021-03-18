import Animation from './animation.js';
import Modal from './modal.js';

Animation()

const modal = Modal({gsap})
const cards = document.querySelectorAll('.cards .card')

for (let card of cards) {
  const cardId = card.dataset.id

  const deleteButton = card.querySelector('button.delete')
  deleteButton.onclick = () => {
    modal.open()

    modal.ok((ev) => {
      console.log('confirm clicked', cardId)
      fetch('/delete/' + cardId, { method: 'DELETE' })
      .then((result) => {
        if (result.status === 200) {
          location.reload()
        }
      }).catch((err) => console.log(err))
    })
  }
}