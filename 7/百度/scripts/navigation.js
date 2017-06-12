/**
 * Created by Administrator on 2017/4/9.
 */
$(document).ready(function () {

    $(".navigation-like-activity-icon").each(function (index) {
        $(this).hide();
    });

    $(".navigation-like-activity-desc").each(function(index){
        $(this).hide();
    });


    $("li[activity]").each(function (index) {
        $(this).find(".navigation-like-activity-icon").show();
    }).mouseover(function (index) {
        $(this).find(".navigation-like-activity-desc").show();
    }).mouseout(function (index) {
        $(this).find(".navigation-like-activity-desc").hide();
    });


});