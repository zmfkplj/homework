/**
 * Created by wwtliu on 14/9/5.
 */
$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();

        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};

        //滚动屏幕
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };

        //窗口大小变化
        window.onresize = function () {
            imgLocation();
        };
    });
});

//滚动屏幕
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

//布局图片
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight = box.eq(index).height();
        if(index<num){
            //第1行
            boxArr[index]= boxHeight;
            $(value).css({
                "position":"absolute",
                "top":0,
                "left":index*boxWidth
            });
        }else{
            //大于第1行
            var minboxHeight = Math.min.apply(null,boxArr);
            var minboxIndex = $.inArray(minboxHeight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}