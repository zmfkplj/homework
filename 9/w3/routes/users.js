var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('./db.js');
var connection = mysql.createPool(dbconfig);

/* 后台. */
router.get('/getnews', function(req, res, next) {
  connection.query('select * from `news` where `state`=? order by id desc',[1],function (err,rows) {
     res.json(rows);
  });
});

//点击确认更新
router.post('/update', function(req, res, next) {
    var newsid = req.body.newsid;
    var newstype = req.body.newstype;
    var newstitle = req.body.newstitle;
    var newsimg = req.body.newsimg;
    var newstime = req.body.newstime;
    var newssrc = req.body.newssrc;

    connection.query('update `news` set `newstitle` = ?,`newstype` = ?,`newsimg` = ?,`newstime` = ?,`newssrc` = ? where `id` = ?',
        [newstitle, newstype, newsimg, newstime, newssrc, newsid],function (err,rows) {
        console.log(rows.changedRows);
        res.json("更新成功");
    });
});

//取当前
router.get('/curnews', function(req, res, next) {
  var newsid = req.query.newsid;

    connection.query('select * from `news` where `id`=?',[newsid],function (err,rows) {
        res.json(rows);
    });
});

//删除
router.post('/delete', function(req, res, next) {
  var newsid = req.body.newsid;
  connection.query('update `news` set `state` = 2 where `id` = ?',[newsid],function (err,rows) {
      console.log(rows.changedRows);
      res.json("删除成功");
  });
});

//新增
router.post('/insert', function(req, res, next) {
    var newstitle = req.body.newstitle;
    var newstype = req.body.newstype;
    var newsimg = req.body.newsimg;
    var newstime = req.body.newstime;
    var newssrc = req.body.newssrc;

    connection.query('INSERT INTO `news`(`newstitle`, `newstype`,`newsimg`,`newstime`,`newssrc`,`state`) VALUES (?,?,?,?,?,?)',
        [newstitle,newstype,newsimg,newstime,newssrc,1],function (err,result) {
        if(!err){
            console.log(result.insertId);
            res.json("新增成功");
        }
    });
});

module.exports = router;
