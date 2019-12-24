let newsNode = document.querySelector('main .news-section .other-news')
let blogNode = document.querySelector('main .blog-section .blog-inner')
let videoNode = document.querySelector('main .video-section .video-inner')
let goodsNode = document.querySelector('main .goods-section .goods-inner')
let concertNode = document.querySelector('main .concert-section .concert-inner .concert-content')
let collapseBtn = document.querySelector("main .news-section .top-news .top-inner .top-content .collaspe-btn span")
let collapseDiv = document.querySelector("main .news-section .top-news .top-inner .top-content")
let collapseContent = document.querySelector("main .news-section .top-news .top-inner .top-content .top-news-content .top-news-text:last-child")
let collapseSchedule = document.querySelector(".nav .today-schedule")
let collapseScheduleContent = document.querySelector(".nav .today-schedule .schedule-inner .schedule-list .schedule-item:last-child")
let scheduleBtn = document.querySelector(".nav .today-schedule .schedule-inner .schedule-btn span")
let beatingNotes = document.getElementById("beating-notes")
let navBar = document.querySelector(".nav .navbar")
let navLogo = document.querySelector(".nav .navbar header .logo")
let notesIndex = 1
window.onload = function(){
  // autoCarousel()
  for(let i = 1;i < 8;i++){
    generateBeatingNodes()
  }
  document.addEventListener('scroll', () => {
    opacityCheck()
  })
  opacityCheck()
}
function showCollapse(){
  if(collapseDiv.style.height === "160px"){
    collapseDiv.style.height = "80px"
    collapseBtn.innerHTML = "+"
    newsNode.style.marginTop = "0px"
    collapseContent.style.height = "0px"
  }else{
    collapseDiv.style.height = "160px"
    collapseBtn.innerHTML = "-"
    newsNode.style.marginTop = "80px"
    collapseContent.style.height = "80px"
  }
}
function showSchedule(){
  if(collapseSchedule.style.height === "60px"){
    collapseSchedule.style.height = "30px"
    scheduleBtn.innerHTML = "+"
    collapseScheduleContent.style.height = "0px"
  }else{
    collapseSchedule.style.height = "60px"
    scheduleBtn.innerHTML = "-"
    collapseScheduleContent.style.height = "30px"
  }
}
function generateBeatingNodes(){
  if(notesIndex === 5){
    notesIndex = 1
  }
  console.log(beatingNotes.clientHeight, beatingNotes.clientWidth)
  let noteX = Math.floor(Math.random() * beatingNotes.offsetWidth)
  let noteY = Math.floor(Math.random() * beatingNotes.offsetHeight)
  let noteR = Math.floor(Math.random() * 20 + 120)
  console.log(noteX, noteY, noteR)
  let noteLiNode = document.createElement("div")
  noteLiNode.className = "beating-notes-item beating-notes-item-" + notesIndex
  noteLiNode.style.width = noteR + "px"
  noteLiNode.style.height = noteR + "px"
  noteLiNode.style.top = noteY + "px"
  noteLiNode.style.left = noteX + "px"
  noteLiNode.innerHTML = `
    <span></span>
    <img src="https://cdn.hinatazaka46.com/files/14/hinata/img/special/2nd_single_announce/note${notesIndex}.svg" >
  `
  beatingNotes.appendChild(noteLiNode)
  notesIndex++
}
function opacityCheck(){
  if(document.documentElement.scrollTop >= 30){
    navBar.style.top = "0px"
    navLogo.style.transform = "scale(0.7)"
  }else{
    navBar.style.top = "20px"
    navLogo.style.transform = "scale(1)"
  }
  if(document.documentElement.scrollTop >= (newsNode.offsetTop / 3)){
    newsNode.style.opacity = 1
    newsNode.style.transform = "translateY(0px)"
  }
  if(document.documentElement.scrollTop >= (videoNode.offsetTop / 2.5)){
    blogNode.style.opacity = 1
    blogNode.style.transform = "translateY(0px)"
  }
  if(document.documentElement.scrollTop >= (videoNode.offsetTop / 1.5)){
    videoNode.style.opacity = 1
    videoNode.style.transform = "translateY(0px)"
  }
  if(document.documentElement.scrollTop >= (goodsNode.offsetTop / 1.3)){
    goodsNode.style.opacity = 1
    goodsNode.style.transform = "translateY(0px)"
  }
  if(document.documentElement.scrollTop >= (concertNode.offsetTop / 1.3)){
    concertNode.style.opacity = 1
    concertNode.style.transform = "translateY(0px)"
  }
}
function skipAnime(){
  let openingAnime = document.querySelector(".opening-anime")
  openingAnime.style.display = "none"
}