window.onload = function() {
  let money = document.querySelector(".wrapper .inner .envelope .open")
  let content = document.querySelector(".wrapper .inner .envelope .top")
  let cover = document.querySelector(".wrapper .inner .envelope .top .visible")
  let moneyAccount = this.document.querySelector(".wrapper .inner .envelope .hidden .number")
  // let info = this.document.querySelector(".wrapper .inner .envelope .hidden .info")
  let resetBtn = this.document.querySelector(".wrapper .inner .envelope .reset")
  money.onceClick = false
  money.addEventListener("click", (e) => {
    e.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(e) {
      if(xhr.readyState === 4 && xhr.status === 200) {
        let account = xhr.responseText
        moneyAccount.innerHTML = account
      }
    }
    xhr.open("GET", "http://127.0.0.1:3000/m", true)
    xhr.send(null)
    // let account = (Math.random() * 10).toFixed(2)
    if(!money.onceClick) {
      money.classList.remove("reverse")
      money.classList.add("reverse")
      money.onceClick = true
      content.classList.remove("opened")
      content.classList.add("opened")
      resetBtn.style.opacity = "1"
      money.style.opacity = "0"
      money.style.transform = "scale(1.3)"
      cover.style.boxShadow = "0px 0px 0px #333"
      money.style.boxShadow = "0px 0px 0px #333"
    }
  })
  resetBtn.addEventListener("click", reset)
  function reset() {
    money.onceClick = false
    money.classList.remove("reverse")
    money.style.boxShadow = "0px 5px 0px #333"
    resetBtn.style.opacity = "0"
    content.classList.remove("opened")
    money.style.opacity = "1"
    money.style.transform = "scale(1)"
    cover.style.boxShadow = "0px 10px 0px #333"
  }
}