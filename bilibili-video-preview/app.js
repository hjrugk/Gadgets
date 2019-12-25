let previewData = {
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "pvdata": "\/\/i0.hdslb.com\/bfs\/videoshot\/27507919.bin",
    "img_x_len": 10,
    "img_y_len": 10,
    "img_x_size": 160,
    "img_y_size": 90,
    "image": ["\/\/i0.hdslb.com\/bfs\/videoshot\/27507919.jpg"],
    "index": [0, 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288]
  }
}
window.onload = function () {
  let timeout
  let card = document.querySelector(".list-box .video-card .card-pic a .preview")
  let progress = document.querySelector(".list-box .video-card .card-pic a .preview .progress span")
  card.addEventListener("mouseover", function (e) {
    timeout = setTimeout(() => {
      card.style.opacity = 1
      let xPos = 0
      let yPos = 0
      card.addEventListener("mousemove", (e) => {
        let len = e.clientX - 20
        if (len <= 0) {
          len = 0
        } else if (len > 154) {
          len = 154
        }
        let index = Math.floor(len / 154 * 50)
        if(index === 50) {
          index = 49
        }
        let time = Math.floor(previewData.data.index[index] / 290 * 50)
        xPos = Math.floor(time % 10)
        yPos = Math.floor(time / 10)
        let x = xPos * 170
        let y = 10 - yPos * 95.625
        card.style.backgroundImage = "url('https://i0.hdslb.com/bfs/videoshot/27507919.jpg@.webp')"
        card.style.backgroundSize = "1700px"
        card.style.backgroundPosition = x + "px " + y +"px"
        progress.style.width = len / 154 * 100 + "%"
      })
    }, 1000);
  })
  card.addEventListener("mouseleave", () => {
    card.style.opacity = 0
    clearTimeout(timeout)
  })
}