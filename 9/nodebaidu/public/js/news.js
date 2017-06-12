/**
 * Created by Administrator on 2017/4/22.
 */
$(document).ready(function () {
    refreshNews('精选');

    $('nav a').click(function (e) {
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });

});

function refreshNews(type){
    var $lists = $('article ul');
    $lists.empty();

    $.ajax({
        url:'/news',
        type:'get',
        datatype:'json',
        data:{newstype:type},
        success:function (data) {
            console.log(data);
            data.forEach(function (item, index,array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src',filterXSS(item.newsimg)).appendTo($newsimg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(filterXSS(item.newstitle)).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span></span>').addClass('newstime').html(moment(item.newstime).format('YYYY-MM-DD')).appendTo($p);
                var newssrc = $('<span></span>').addClass('newssrc').html(filterXSS(item.newssrc)).appendTo($p);
            });
        }
    });


}