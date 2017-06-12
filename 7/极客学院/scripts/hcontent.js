/**
 * Created by Administrator on 2017/4/13.
 */
$(document).ready(function () {
    var courseList = $(".course-container");

    courseList.each(function (index, obj) {
        courseList.eq(index).mouseover(function () {
            $(this).css({"z-index":"1000"});
            $(this).find(".course-desc").slideDown();
            $(this).find(".course-study-num").show();
        }).mouseout(function () {
            $(this).css({"z-index":"0"});
            $(this).find(".course-desc").slideUp();
            $(this).find(".course-study-num").hide();
        })
    })
});