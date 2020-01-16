window.onload = function () {
  let card = document.querySelector(".wrapper .inner .container .card")
  let back = document.querySelector(".wrapper .inner .container .back")


  let numberIpt = document.querySelector(".wrapper .inner .container .form .card-number #number-ipt")
  let nameIpt = document.querySelector(".wrapper .inner .container .form .card-name #name-ipt")
  let cwIpt = document.querySelector(".wrapper .inner .container .form .card-info #cw-ipt")
  let monthSlt = document.querySelector(".wrapper .inner .container .form .card-info #month-slt")
  let yearSlt = document.querySelector(".wrapper .inner .container .form .card-info #year-slt")
  let submitBtn = document.querySelector(".wrapper .inner .container .form .card-submit #submit-btn")

  let nameDisplay = document.querySelector(".wrapper .inner .container .card .card-name #display-name")
  let cwDisplay = document.querySelector(".wrapper .inner .container .back .middle-sign #cw-display")
  let imgDisplay = document.querySelector(".wrapper .inner .container .card .card-image .right-image #bank-logo")

  let nameContainer = document.querySelector(".wrapper .inner .container .card .card-name")
  let dateContainer = document.querySelector(".wrapper .inner .container .card .card-date")
  let numberContainer = document.querySelector(".wrapper .inner .container .card .card-number .number-container")

  let monthBack = document.querySelector(".wrapper .inner .container .card .card-date .date-container .span-month #holder-month")
  let monthForward = document.querySelector(".wrapper .inner .container .card .card-date .date-container .span-month #display-month")
  let yearBack = document.querySelector(".wrapper .inner .container .card .card-date .date-container .span-year #holder-year")
  let yearForward = document.querySelector(".wrapper .inner .container .card .card-date .date-container .span-year #display-year")

  let numberForward = numberContainer.querySelectorAll(".span-forward")
  let numberBack = numberContainer.querySelectorAll(".span-back")
  
  let m = "MM"
  let y = "YY"

  const bankCode = {
    "4367": 4,
    "6217": 4,
    "6228": 1,
    "9559": 1,
    "6222": 5,
    "9558": 5,
    "6216": 3,
    "4563": 3,
    "6013": 3,
    "4581": 2
  }

  numberIpt.addEventListener("input", (e) => {
    let {
      value
    } = e.target
    if (e.inputType === "insertText") {
      if (/\S{5}/.test(value)) {
        numberIpt.value = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ")
      }
      let len = numberIpt.value.length
      for (let i = 0; i < len; i++) {
        if (numberIpt.value[i] === " ") {
          continue
        } else {
          rotateSpan(numberBack[i], numberForward[i], numberIpt.value[i], 1)
        }
      }
    } else if (e.inputType === "deleteContentBackward") {
      for (let i = numberIpt.value.length; i < 23; i++) {
        if (i === 4 || i === 9 || i === 14 || i === 19) {
          continue
        } else {
          rotateSpan(numberBack[i], numberForward[i], "", 0)
        }
      }
    }
    if (value.length === 4) {
      let code = value.substring(0, 4)
      if (bankCode[code]) {
        imgDisplay.src = "../server/image/cb-" + bankCode[code] + ".png"
      } else {
        imgDisplay.src = "../server/image/cb-default.png"
      }
    } else if (value.length < 4) {
      imgDisplay.src = "../server/image/cb-default.png"
    }
  })

  nameIpt.addEventListener("input", (e) => {
    if (nameIpt.value.length === 0) {
      nameDisplay.value = "Your Name"
      return
    }
    nameDisplay.value = e.target.value
  })
  monthSlt.addEventListener("change", (e) => {
    m = e.target.value
    rotateSpan(monthBack, monthForward, m, 1)
  })
  yearSlt.addEventListener("change", (e) => {
    y = e.target.value.substring(2)
    rotateSpan(yearBack, yearForward, y, 1)
  })
  cwIpt.addEventListener("focus", () => {
    rotateTransition(1)
  })
  cwIpt.addEventListener("blur", () => {
    rotateTransition(0)
  })
  cwIpt.addEventListener("input", (e) => {
    let value = e.target.value
    cwDisplay.value = value
  })
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(numberIpt.value.replace(/\s/g, ""), nameIpt.value, monthForward.innerText + "/" + yearForward.innerText, cwIpt.value)
  })

  function outlineTransition(ele, flag) {
    ele.style.boxShadow = "0px 0px " + flag * 3 + "px #fff"
    ele.style.borderRadius = flag * 2 + "px"
  }

  function rotateTransition(flag) {
    card.style.transform = "translateX(-50%) rotateY(" + 180 * (flag ^ 0) + "deg)"
    back.style.transform = "translateX(-50%) rotateY(" + 180 * (flag ^ 1) + "deg)"
  }

  function eventFocusAndBlur(ele1, ele2) {
    ele1.addEventListener("focus", () => {
      outlineTransition(ele2, 1)
    })
    ele1.addEventListener("blur", () => {
      outlineTransition(ele2, 0)
    })
  }

  function rotateSpan(elBack, elForward, val, flag) {
    val = val || ""
    elBack.style.transform = "translateY(" + (flag * -25) + "px)"
    elForward.style.transform = "translateY(" + (flag * -25) + "px)"
    elForward.innerText = val
  }

  eventFocusAndBlur(numberIpt, numberContainer)
  eventFocusAndBlur(nameIpt, nameContainer)
  eventFocusAndBlur(monthSlt, dateContainer)
  eventFocusAndBlur(yearSlt, dateContainer)
}