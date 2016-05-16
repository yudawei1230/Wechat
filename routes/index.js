var express = require('express');
var crypto = require('crypto');
var router = express.Router();

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
