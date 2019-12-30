window.onload = function() {
  let canvas = document.querySelector(".wrapper .inner #my-canvas")
  let result = document.querySelector(".wrapper .inner .lucky-zone .result")
  let oneMoreBtn = document.querySelector(".wrapper .inner .info span")
  let bonus = ["100元现金红包","再来一次","谢谢惠顾","20元花呗红包","优酷7天会员","湿纸巾一包"]
  let isAllowMove = false
  let count = 0
  let bonusIndex = 2
  canvas.style.backgroundColor = "#cccccc"
  let ctx = canvas.getContext("2d")
  canvas.addEventListener("mousedown", (e) => {
    isAllowMove = true
    let startX = e.offsetX
    let startY = e.offsetY
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 40
    ctx.moveTo(startX, startY)
    canvas.addEventListener("mousemove", (e) => {
      if(isAllowMove) {
        let endX = e.offsetX
        let endY = e.offsetY
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }
    })
  })
  canvas.addEventListener("mouseup", () => {
    isAllowMove = false
    count++
    if(count === 5) {
      let index = (Math.random() * 100).toFixed(0)
      if(index === 90) {
        bonusIndex = 0
      }else if(index >= 80 && index < 90) {
        bonusIndex = 3
      }else if(index >= 65 && index < 80) {
        bonusIndex = 4
      }else if(index >= 50 && index < 65) {
        bonusIndex = 1
      }else if(index >= 20 && index < 50) {
        bonusIndex = 2
      }else {
        bonusIndex = 5
      }
      oneMoreBtn.style.visibility = "visible"
      ctx.clearRect(0,0,600,360)
      canvas.style.opacity = "0"
      canvas.style.zIndex = "1"
      result.style.zIndex = "2"
      result.innerHTML = bonus[bonusIndex]
    }
  })
  oneMoreBtn.addEventListener("click", () => {
    window.location.reload()
  })
}