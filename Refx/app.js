window.onload = function() {
  let paperUrl = document.querySelector("#paper-url")
  let submitBtn = document.querySelector("#submit-btn")
  let refList = document.querySelector(".wrapper .inner .ref-container .ref-list")
  
  function requestRefList() {
    ajax("http://localhost:3000/l", "GET", (data) => {
      refList.innerText = data
    })
  }

  requestRefList()
  
  submitBtn.addEventListener("click", () => {
    // let postData = {
    //   title: paperTitle,
    //   url: paperUrl
    // }
    // axios("http://localhost:3000/p",postData)
    //   .then(res => console.log(res))
    //   .catch(e => console.log(e))
    ajax("http://localhost:3000/p?url=" + paperUrl.value,"GET",(data) => {
      console.log(data)
    })
  })
}