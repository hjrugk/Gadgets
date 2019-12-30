let t
window.onload = function() {
  let citems = document.querySelectorAll(".wrapper .carousel-container .carousel-list .carousel-item")
  let indicators = document.querySelectorAll(".wrapper .carousel-container .carousel-indicator .indicator-list .indicator-item")
  let cur = 0
  let zi = 2
  t = intervalMove(cur)
  indicators.forEach((indicator, index) => {
    indicator.onceClick = false
    indicator.addEventListener("click", () => {
      if(!indicator.onceClick) {
        clearInterval(t)
        reset(index)
        moveTo(index)
        changeClass(indicators, indicator)
        t = intervalMove(index)
      }
    })
  })

  function intervalMove(cur){
    return setInterval(() => {
      if(cur >= citems.length) {
        cur = 0
      }
      moveTo(cur)
      changeClass(indicators, indicators[cur])
      cur += 1
    },3000)
  }
  // 改变指示器的样式
  function changeClass(list, item) {
    list.forEach((indicator) => {
      indicator.classList.remove("active")
      indicator.onceClick = false
    })
    item.classList.add("active")
    item.onceClick = true
  }
  // 移动函数
  function moveTo(index = 0) {
    citems[index].style.zIndex = zi++
    citems[index].style.transition = "transform 0.3s ease"
    citems[index].style.transform = "translate3d(0px, 0px, 0px)"
    citems[cur].style.transition = "transform 0.6s ease"
    // 当前元素之前的元素向前移动
    for(let i = 0; i < index; i++) {
      citems[i].style.transform = "translate3d(-459px, 0px, 0px)"
    }
    // 当前元素之后的元素向后移动
    for(let j = index + 1; j < citems.length; j++) {
      citems[j].style.transform = "translate3d(459px, 0px, 0px)"
    }
    cur = index
  }
  // 重新设置位置
  function reset(prevIndex) {
    citems.forEach(citem => {
      citem.style.transition = "none 0.6s ease"
      citem.style.transform = "translate3d(459px, 0px, 0px)"
    })
    // 前一个元素向前移动
    citems[prevIndex].style.transition = "transform 0.6s ease"
    citems[prevIndex].style.transform = "translate3d(-459px, 0px, 0px)"
  }
}
window.onabort = function() {
  clearInterval(t)
}