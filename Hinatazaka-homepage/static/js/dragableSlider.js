let blogList = document.querySelector('main .blog-section .blog-inner')
let dragableSlider = document.getElementById('dragable-slider')
let x1 = 0;
let x2 = 0;
let y = 0;
blogList.addEventListener('mousedown',(e) => {
  x1 = e.clientX
})
blogList.addEventListener('mouseup', (e) => {
  x2 = e.clientX
  y  = y + x2 - x1
  dragableSlider.style.transition = "transform 0.5s ease"
  if(y >= 0){
    y = 0
  }else if(y <= -1280){
    y = -1280
  }
  dragableSlider.style.transform = "translateX(" + y + "px)"
})