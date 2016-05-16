var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var http = require('https');
var accessToken = '';
var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx958c9c637fb0e1f9&secret=e27a6f0512e827c9b9c611f6aff72188';

var getAccess = http.get(url,function(serverData){
     serverData.on('data',function(data){
        accessToken += data;
     }).on('end',function(){
       console.log(accessToken);
     });
});
getAccess.on('error',function(e){
  console.log('problem with request : '+e);
})
getAccess.end();
/* GET home page. */
router.get('/wechat', function(req, res, next) {
    console.log(req.query);
    res.end();
});
router.post('/wechat', function(req, res, next) {
	console.log(1);
	res.end();
});
router.post('*', function(req, res, next) {
	console.log(1);
  console.log(req.body);
	res.end();
});
module.exports = router;
