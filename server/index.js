const http = require("http")
const fs = require("fs")
const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*' //可以是*，也可以是跨域的地址
  })
})

server.on("request", (req, res) => {
  let totalMoney
  let randomMoney
  let sumMoney
  if (req.url === "/m") {
    fs.readFile("./data.json", async (err, data) => {
      totalMoney = await JSON.parse(data).total
      sumMoney = await JSON.parse(data).sum
      if (sumMoney >= 100) {
        sumMoney = 0
      }
      if (totalMoney < 10) {
        randomMoney = totalMoney
        totalMoney = await 100
      } else {
        randomMoney = (Math.random() * 10).toFixed(2)
        totalMoney = await (parseFloat(totalMoney) - randomMoney).toFixed(2)
      }
      sumMoney = await sumMoney + parseFloat(randomMoney)
      fs.writeFile("./data.json", JSON.stringify({
        total: totalMoney,
        sum: sumMoney
      }), () => {
        console.log(totalMoney, sumMoney)
      })

      res.write(randomMoney)
      res.end()
    })
  }
  if(req.url === "/s") {
    fs.readFile("./data.json", async (err, data) => {
      sumMoney = await JSON.parse(data).sum
      res.write(sumMoney.toFixed(2))
      res.end()
    })
  }
})

server.listen(3000, () => {
  fs.writeFile("./data.json", JSON.stringify({total:"100",sum:0}),() => {
    console.log("连接成功")
  })
})