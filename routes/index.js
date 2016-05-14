var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/wechat', function(req, res, next) {
	var shasum = crypto.createHash('sha1');
	var p = [req.query.token,req.query.timestamp,req.query.nonce].sort();
	shasum.update(p);
	var d = shasum.digest('hex');
	console.log(res.query.signature ===d);
	res.query.signature ===d ? res.end(res.query.echostr) : console.log(d + '----'+res.query.signature);
});
module.exports = router;
