window.onload = function() {
  let codeNodes = []
  let container = document.querySelector(".wrapper .inner")
  let resetBtn = this.document.querySelector(".wrapper .reset")
  let transferring = this.document.querySelector(".wrapper .loading .transferring")
  let successed = this.document.querySelector(".wrapper .loading .successed")
  let input = document.querySelector(".wrapper .input")
  let performingData = this.document.querySelector(".wrapper .input .container .data-input")
  let submitBtn = this.document.querySelector(".wrapper .input .container .submit-btn")
  let radios = this.document.querySelectorAll(".wrapper .input .container .radio-group input[name='base']")
  submitBtn.addEventListener("click", () => {
    radios.forEach(radio => {
      if(radio.checked) {
        let res = toBinary(performingData.value,radio.value)
        input.style.opacity = "0"
        container.style.zIndex = "2"
        transferring.style.opacity = "1"
        transferring.style.animation = "blinking .5s ease alternate-reverse infinite"
        successed.style.opacity = "1"
        successed.style.animation = "showData 5.5s ease"
        setTimeout(() => createDataStream(res), 5000)
      }
    })
  })
  resetBtn.addEventListener("click", () => {
    input.style.opacity = "1"
    input.style.zIndex = "2"
    container.style.zIndex = "1"
    codeNodes = []
    container.innerHTML = ""
  })
  function createDataStream(data) {
    let w = window.innerWidth
    let count = w / 20
    transferring.style.opacity = "0"
    transferring.style.animation = "none"
    successed.style.opacity = "0"
    successed.style.animation = "none"
    for(let i = 0; i <= count; i++) {
      codeNodes[i] = document.createElement("div")
      codeNodes[i].className = "code"
      codeNodes[i].textContent = data
      codeNodes[i].style.left = i * 20 +"px"
      codeNodes[i].style.top = Math.random() * -500 + "px"
      codeNodes[i].style.animation = "downwards " + (this.Math.random() * 4 + 1) + "s linear alternate-reverse infinite"
    }
    container.append(...codeNodes)
    container.style.opacity = "1"
  }
}