/**
 * Created by Administrator on 2017/4/7.
 */
$(document).ready(function () {

    //更多菜单
    $('#navMore, #moreProduct').mouseover(function () {
        $('#moreProduct').show();
    }).mouseout(function () {
        $('#moreProduct').hide();
    });

    /** 初始加载我的关注 */
    loadPage("focus.html");

    /** 控制鼠标mouseover mouseout */
    $(".maincontent-nav ul li").each(function (index) {
        $(this).mouseover(function () {
            $(".maincontent-nav ul li .tabover").removeClass("tabover");
            $(this).addClass("tabover");
        }).mouseout(function () {
            $(this).removeClass("tabover");
        });
    });

    /*** 选择 */
    $(".maincontent-nav ul li").click(function () {
        $(".tabselect").each(function (index) {
            $(this).removeClass("tabselect");
        });
        $(this).addClass("tabselect");
        loadPage($(this).attr("data-page") + ".html");
    });

});

/**  加载选中内容 */
function loadPage(url) {
    $("#maincontent-page").load(url,function () {

    });
}







