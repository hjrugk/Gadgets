const navData = [
  ["abc","def","ghi"],
  ["abcd","efgh","ijkl","mnop"],
  ["abcde","fghij","klmno","pqrst","uvwxyz"],
  ["abcdef","ghijkl"]
]

window.onload = function () {
  let navItems = document.querySelectorAll(".wrapper .inner nav .navbar .nav-item")
  let collapse = document.querySelector(".wrapper .inner .collaspe")

  let INSERT_NAVLIST = ""

  navItems.forEach((item, index) => {
    if (index === 0) return
    item.addEventListener("mouseenter", (e) => {
      INSERT_NAVLIST = `
        <ul class="collaspe-list">
      ` 
      for(let i = 0; i < navData[index - 1].length; i++){
        INSERT_NAVLIST += `<li class="collaspe-item">${navData[index - 1][i]}</li>`
      }
      INSERT_NAVLIST += `</ul>`
      e.target.classList.add("active")
      collapse.style.opacity = "1"
      collapse.innerHTML = INSERT_NAVLIST
      let x = e.target.offsetLeft + navItems[0].clientWidth / 2 - collapse.children[0].clientWidth / 2
      collapse.style.left = x + "px"
    })
    item.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("active")
      collapse.addEventListener("mouseleave", () => {
        collapse.style.opacity = "0"
        collapse.innerHTML = ""
      })
    })
  })
}