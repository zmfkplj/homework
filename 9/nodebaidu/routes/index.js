var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('./db.js');

/* 在主页获取新闻. */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;
  var connection = mysql.createConnection(dbconfig);
  connection.connect();
  connection.query('select * from `news` where `newstype`=?',[newstype],function (err, rows, fields) {
    console.log(rows);
    res.json(rows);
  });
});

module.exports = router;
