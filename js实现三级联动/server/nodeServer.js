const http = require('http');
const file = require('fs');
const server = http.createServer();

server.listen('54320', function() {console.log('开始监听54320端口')});

server.on('request', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('content-type', 'application/json; charset=utf-8');
  if (req.method === 'GET' && req.url === '/api/getDatas') {
    file.readFile('./region.json', 'utf-8', function (err, data) {
      if (err) return res.end(JSON.stringify({status: 500, msg:'服务器收到了你的请求,但不想把数据给你..[/手动狗头]'}));
      let msg = {
        status: 200,
        data: JSON.parse(data),
        msg: '获取数据成功!',
      }
      res.end(JSON.stringify(msg));
    })
  }
})

