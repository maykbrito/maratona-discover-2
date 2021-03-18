export default function Animation() {
  let timmingFactor = 1.5; // bigger = slower

  /*index page*/
  gsap.from("#top", {
    y: -35, 
    opacity: 0, 
    duration: 0.4 * timmingFactor, 
    ease: "back"
  })
  gsap.from("#summary .info", {
    x: -35, opacity: 0, 
    duration: 0.2 * timmingFactor, 
    delay: 0.2 * timmingFactor, 
    ease: "back"
  })
  gsap.from("#summary button", {
    x: 35, opacity: 0, 
    duration: 0.2 * timmingFactor, 
    delay: 0.2 * timmingFactor, 
    ease: "back"
  })
  gsap.from(".card", {
    stagger: 0.25, y: 35, opacity: 0, 
    duration: 0.2 * timmingFactor, 
    delay: 0.3 * timmingFactor, 
    ease: "back"
  })

 
}