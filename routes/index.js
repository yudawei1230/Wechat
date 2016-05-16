var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var http = require('http');
var accessToken = '';
var head = {
  method:'GET',
  host:'api.weixin.qq.com',
  scheme: 'https',
  path:'/cgi-bin/token?grant_type=client_credential&appid=wx958c9c637fb0e1f9&secret=e27a6f0512e827c9b9c611f6aff72188',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

};
var getAccess = http.request(head,function(serverData){
     serverData.on('data',function(data){
        accessToken += data;
     }).on('end',function(){
       console.log(accessToken);
     });
});
getAccess.on('error',function(e){
  console.log(`problem with request : ${e}`);
})
getAccess.end();
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
