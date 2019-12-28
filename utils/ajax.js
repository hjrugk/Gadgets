function ajax(url,method,callback) {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function(e) {
    if(xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.open(method, url, true)
  xhr.send(null)
}