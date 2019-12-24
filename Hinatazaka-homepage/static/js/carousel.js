let carousel = document.querySelector('.carousel-inner')
let indicators = document.querySelectorAll('.indicator .indicator-inner .indicator-item .dot')
let carouselItems = document.querySelectorAll('.carousel .carousel-inner .carousel-item')
let flag;
let itemFlag;

function handleClick({target}) {
  itemFlag && clearInterval(itemFlag)
  let index = parseInt(target.attributes.index.value) - 1
  for(const indicator of indicators){
    indicator.className = "dot"
  }
  indicators[index].className = indicators[index].className + " active"
  carousel.style.transition = "transform 0.5s ease"
  carousel.style.transform = "translate3d("+ - index * 1300 + "px, 0px, 0px)"
  autoCarousel(index)
}

function nextCarousel(index,itemIndex){
  carousel.style.transform = "translate3d(" + (- index * 1300 / 100 - itemIndex * 1300) + "px, 0px, 0px)"
}

function move(index=1,itemIndex){
  flag = setInterval(function(){
    if(index===101){
      flag && clearInterval(flag)
      index = 0
    }else{
      nextCarousel(index,itemIndex)
      index ++
    }
  },1)
}
function autoCarousel(itemIndex = 0){
  itemFlag = setInterval(function(){
    for(const indicator of indicators){
      indicator.className = "dot"
    }
    for(const carouselItem of carouselItems){
      carouselItem.className = "carousel-item"
    }
    move(0, itemIndex)
    itemIndex++
    if(itemIndex===5){
      itemIndex = 0
    }
    indicators[itemIndex].className = indicators[itemIndex].className + " active"
    carousel.style.transition = ""
  }, 3000)
}