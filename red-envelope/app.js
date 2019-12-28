window.onload = function() {
  let money = document.querySelector(".wrapper .inner .envelope .open")
  let content = document.querySelector(".wrapper .inner .envelope .top")
  let cover = document.querySelector(".wrapper .inner .envelope .top .visible")
  let moneyAccount = this.document.querySelector(".wrapper .inner .envelope .hidden .number")
  let moneyUnit = this.document.querySelector(".wrapper .inner .envelope .hidden .unit")
  let info = this.document.querySelector(".wrapper .inner .envelope .hidden .info")
  let resetBtn = this.document.querySelector(".wrapper .inner .envelope .reset")
  money.onceClick = false
  info.onceClick = false
  if(money.onceClick) {
    money.classList.remove("un")
  }else {
    money.classList.add("un")
  }
  money.addEventListener("click", (e) => {
    if(!money.onceClick) {
      ajax("http://127.0.0.1:3000/m","GET",(data) => {
        moneyAccount.innerHTML = data
      })
      money.classList.remove("reverse")
      money.classList.remove("un")
      money.classList.add("reverse")
      money.onceClick = true
      content.classList.remove("opened")
      content.classList.add("opened")
      resetBtn.style.opacity = "1"
      money.style.opacity = "0"
      money.style.cursor = "default"
      info.style.opacity = "1"
      info.style.transition = "all .2s ease .2s"
      moneyAccount.style.opacity = "1"
      moneyAccount.style.transition = "all .2s ease .2s"
      moneyUnit.style.opacity = "1"
      moneyUnit.style.transition = "all .2s ease .2s"
      info.style.zIndex = "2"
      money.style.transform = "scale(1.3)"
      cover.style.boxShadow = "0px 0px 0px #333"
      money.style.boxShadow = "0px 0px 0px #333"
    }
  })
  resetBtn.addEventListener("click", reset)
  info.addEventListener("click", () => {
    if(!info.onceClick) {
      ajax("http://127.0.0.1:3000/s","GET",(data) => {
      info.innerHTML = "已抢到"
      moneyAccount.innerHTML = data
      info.onceClick = true
      info.style.cursor = "default"
    })
    }
  })
  function reset() {
    money.onceClick = false
    money.classList.remove("reverse")
    money.classList.add("un")
    money.style.boxShadow = "0px 5px 0px #333"
    resetBtn.style.opacity = "0"
    content.classList.remove("opened")
    money.style.opacity = "1"
    money.style.transform = "scale(1)"
    money.style.cursor = "pointer"
    info.style.transition = "none .2s ease .2s"
    info.style.zIndex = "1"
    info.style.opacity = "0"
    moneyAccount.style.opacity = "0"
    moneyUnit.style.opacity = "0"
    info.innerHTML = "已存入钱包 >"
    info.style.cursor = "pointer"
    info.onceClick = false
    cover.style.boxShadow = "0px 10px 0px #333"
  }
}