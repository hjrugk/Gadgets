window.onload = function() {
  let codeNodes = []
  let dataRontainer = document.querySelector(".wrapper .inner")
  let resetBtn = this.document.querySelector(".wrapper .reset")
  let sampleContainer = this.document.querySelector(".wrapper .sample")
  let transferring = this.document.querySelector(".wrapper .loading .transferring")
  let successed = this.document.querySelector(".wrapper .loading .successed")
  let inputContainer = document.querySelector(".wrapper .input")
  let performingData = this.document.querySelector(".wrapper .input .container .data-input")
  let submitBtn = this.document.querySelector(".wrapper .input .container .submit-btn")
  let radios = this.document.querySelectorAll(".wrapper .input .container .radio-group input[name='base']")

  createDataStream("110100011010101110010111010111001111101011",sampleContainer)

  submitBtn.addEventListener("click", () => {
    sampleContainer.style.visibility = "hidden"
    radios.forEach(radio => {
      if(radio.checked) {
        let res = toBinary(performingData.value,radio.value)
        inputContainer.style.opacity = "0"
        inputContainer.style.visibility = "hidden"
        dataRontainer.style.zIndex = "2"
        transferring.style.opacity = "1"
        transferring.style.animation = "blinking .5s ease alternate-reverse infinite"
        successed.style.opacity = "1"
        successed.style.animation = "showData 5.5s ease"
        setTimeout(() => {
          showTransfer()
          resetBtn.style.display = "block"
          sampleContainer.style.visibility = "visible"
          sampleContainer.style.filter = "blur(3px) grayscale(80%)"
          createDataStream(res,dataRontainer)
        }, 5000)
      }
    })
  })
  resetBtn.addEventListener("click", () => {
    inputContainer.style.opacity = "1"
    // inputGroup.style.zIndex = "4"
    resetBtn.style.display = "none"
    inputContainer.style.visibility = "visible"
    dataRontainer.style.zIndex = "1"
    codeNodes = []
    dataRontainer.innerHTML = ""
  })
  function createDataStream(data,container) {
    let w = window.innerWidth
    let count = w / 20
    for(let i = 0; i <= count; i++) {
      codeNodes[i] = document.createElement("div")
      codeNodes[i].className = "code"
      codeNodes[i].textContent = data
      codeNodes[i].style.left = i * 20 +"px"
      codeNodes[i].style.top = Math.random() * -500 + "px"
      codeNodes[i].style.transform = "translateZ(" + Math.random() * 50 + "px)"
      codeNodes[i].style.animation = "downwards " + (this.Math.random() * 4 + 2) + "s linear alternate-reverse infinite"
    }
    container.append(...codeNodes)
    container.style.opacity = "1"
  }
  function showTransfer() {
    transferring.style.opacity = "0"
    transferring.style.animation = "none"
    successed.style.opacity = "0"
    successed.style.animation = "none"
  }
}