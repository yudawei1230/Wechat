var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.post('/wechat', function(req, res, next) {
   console.log(req.body);
   res.end();
});
router.get('/wechat', function(req, res, next) {
	var shasum = crypto.createHash('sha1');
	var p = ['yudawei',req.query.timestamp,req.query.nonce].sort().join('');
	shasum.update(p);
	var d = shasum.digest('hex');
	req.query.signature === d ? res.end(req.query.echostr) : res.end();
});
router.post('/wechat', function(req, res, next) {
	console.log(1);
	res.end();
});
module.exports = router;
