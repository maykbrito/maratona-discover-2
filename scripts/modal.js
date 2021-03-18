export default function Modal({ gsap }) {

  const wrapper = document.querySelector('.modal-wrapper');
  const element = document.querySelector('.modal');
  const cancelButton = element.querySelector("footer button:nth-child(1)")
  const deleteButton = element.querySelector("footer button:nth-child(2)")

  function open() {
    if (gsap) {
       /*modal*/
      gsap.fromTo(".modal", {
        scale: 0, 
        opacity: 0,
      },{
        scale: 1, 
        opacity: 1,
        duration: 0.3,
        ease: "back",
        delay: 0.1
      }
      )
    }
    wrapper.classList.add('on')
  }

  cancelButton.onclick = () => {
    if (gsap) {
      gsap.fromTo(".modal", {
        scale: 1, 
        opacity: 1,
      }, {
        scale: 0, 
        opacity: 0,
        duration: 0.2,
        ease: "back"
      })

      gsap.delayedCall(0.2, () => {
        wrapper.classList.remove('on')
      })
    } else {
      wrapper.classList.remove('on')
    }
  }

  function ok(cb) {
    deleteButton.onclick = cb
  }
  
  return  {
    open,
    ok
  }

}