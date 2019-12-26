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
        citems[index].style.zIndex = zi++
        citems[index].style.transition = "transform 0.6s ease"
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
        // if(index === 0) {
        //   index = citems.length
        // }
        // move(index - 1)
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
      move(cur)
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
  // 移动
  function move(currentIndex) {
    // console.log(currentIndex)
    let sib = siblings(citems[currentIndex])
    sib.next.style.zIndex = zi++
    reset(currentIndex)
    // sib.prev.style.transition = "transform 0.6s ease"
    // sib.prev.style.transform = "translate3d(459px, 0px, 0px)"
    // 当前元素向前移动
    citems[currentIndex].style.transition = "transform 0.6s ease"
    citems[currentIndex].style.transform = "translate3d(-459px, 0px, 0px)"
    // 即将要展示的元素移动到位置
    sib.next.style.transition = "transform 0.6s ease"
    sib.next.style.transform = "translate3d(0px, 0px, 0px)"
    cur = sib.nextIndex
    // console.log(currentIndex, prevIndex, nextIndex)
    changeClass(indicators, indicators[sib.nextIndex])
  }
  // 寻找前一个元素和后一个元素
  function siblings(currentItem) {
    let currentIndex = 0
    if(!currentItem || !currentItem.parentNode) return {}
    let parentNode = currentItem.parentNode
    let childNodes = parentNode.children
    let childNodesArr = Array.from(childNodes)
    childNodesArr.forEach((childNode, index) => {
      if(childNode === currentItem) {
        currentIndex = index
      }
    })
    let prevIndex = currentIndex - 1 < 0 ? childNodes.length - 1 : currentIndex - 1
    let nextIndex = currentIndex + 1 >= childNodes.length ? 0 : currentIndex + 1
    return {
      prev: childNodes[prevIndex],
      prevIndex,
      next: childNodes[nextIndex],
      nextIndex
    }
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