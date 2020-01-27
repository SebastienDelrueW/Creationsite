const left = document.querySelector('#moses-sea-arm-left');
const right = document.querySelector('#moses-sea-arm-right');
const water = document.querySelectorAll('#moses-sea-water path');

TweenMax.set(water, {
  transformOrigin: 'center'
})

TweenMax.staggerFromTo(water, 1.5, {
  scaleX: 0.9,
  scaleY: 1.1
}, {
  scaleX: 1.1,
  scaleY: 0.9,
  y: -20,
  yoyo: true,
  repeat: -1,
  ease: Power1.easeInOut
}, -.1)


TweenMax.set(left, {
  transformOrigin: '159.716, 156.575'
})

TweenMax.fromTo(left, 1.5, { 
  rotation: 2
}, {
  rotation: -5, 
  yoyo: true, 
  repeat: -1,
  ease: Power1.easeInOut
})

TweenMax.set(right, {
  transformOrigin: '14, 82'
})

TweenMax.fromTo(right, 1.5, { 
  rotation: 350 
}, {
  rotation: 360, 
  yoyo: true, 
  repeat: -1,
  ease: Power1.easeInOut
})