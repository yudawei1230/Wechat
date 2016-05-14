var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/wechat', function(req, res, next) {
	var shasum = crypto.createHash('sha1');
	var p = ['yudawei',req.query.timestamp,req.query.nonce].sort().join('');
	shasum.update(p);
	var d = shasum.digest('hex');
	res.query.signature === d ? res.end(res.query.echostr); : res.end();
});
module.exports = router;
