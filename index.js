var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // 右键-检查-network-ctrl+r打开 -headers
//   response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});//加入;charset=utf-8即可处理中文
    let {pathname} = new URL(request.url);
    if(pathname === '/'){
        
    let htmls =fs.readFileSync(__dirname + '/index.html');
    response.end(htmls);
    
    }else if(pathname === '/index.css'){
        let css =fs.readFileSync(__dirname + '/index.css');
        response.end(css);
        
    }else if(pathname == '/in.js'){
        
    let js =fs.readFileSync(__dirname + '/in.js');
        response.end(js);
    }else{
        response.statusCode(404);
        response.end('404 页面找不到了');
    }


}).listen(65534);

console.log('Server running at http://127.0.0.1:65534/ 最终版。'); 