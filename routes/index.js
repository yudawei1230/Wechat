var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var http = require('http');
var accessToken = '';
var head = {
  method:'GET',
  host:'https://api.weixin.qq.com',
  path:'/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
  port:80,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

};
var getAccess = http.request(head,function(serverData){
  if(serverData.satus.Code == 200){
     serverData.on('data',function(data){
        accessToken += data;
     }).on('end',function(){
       console.log(accessToken);
       res.send(200,body);
     })
  }
  else
    res.send(500,'error');
  console.log(accessToken);
});
/* GET home page. */
router.get('/wechat', function(req, res, next) {
    console.log(req.query);
    res.end();
});
router.post('/wechat', function(req, res, next) {
	console.log(req.body);
	res.end();
});
module.exports = router;
