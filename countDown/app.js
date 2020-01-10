window.onload = function() {
  let nums = document.querySelectorAll(".wrapper .inner .counter .number")
  let decs = document.querySelectorAll(".wrapper .inner .dec .number")
  let hun = document.querySelector(".wrapper .inner .hun")
  let curNum = 0
  let curDec = 0
  let count = 1
  let t
  intervalMove(curNum, nums)
  function intervalMove(cur){
    t = setInterval(() => {
      if(hun.style.opacity !== "0") {
        hun.style.opacity = 0
      }
      if(curDec === 100) {
        curDec = 0
        return clearInterval(t)
      }
      if(cur >= nums.length) {
        cur = 0
      }
      if((curDec <= 100) && (curDec > 0) && (curDec % 10 === 0)) {
        moveTo(count, decs)
        count++
      }
      moveTo(cur, nums)
      cur += 1
      curDec += 1
    },1000)
  }
  function moveTo(index = 0, nums) {
    nums.forEach((num,index) => {
      num.classList.remove("active")
      if(index === 0) {
        num.style.zIndex = "5"
      }else {
        num.style.zIndex = "1"
      }
    })
    nums[index].classList.add("active")
    nums[index].style.transform = "translate3d(0px, 0px, 0px)"
    // 当前元素之前的元素向前移动
    for(let i = 0; i < index; i++) {
      nums[i].style.transform = "translate3d(0px, 200px, 0px)"
    }
    // 当前元素之后的元素向后移动
    for(let j = index + 1; j < nums.length; j++) {
      nums[j].style.transform = "translate3d(0px, -200px, 0px)"
    }
    curNum = index
  }
}