/**
 * Created by Administrator on 2017/4/7.
 */
$(document).ready(function () {

    //最新子菜单
    $("#menu-new").mouseover(function () {
        $(".main-submenu-new").show();
    }).mouseout(function () {
        $(".main-submenu-new").hide();
    });

    // 课程类型子菜单
    $("#menu-kc").mouseover(function () {
        $(".main-submenu-kc").show();
    }).mouseout(function () {
        $(".main-submenu-kc").hide();
    });

    //内容类型子菜单
    $("#menu-type").mouseover(function () {
        $(".main-submenu-type").show();
    }).mouseout(function () {
        $(".main-submenu-type").hide();
    });

    // 难度等级子菜单
    $("#menu-level").mouseover(function () {
        $(".main-submenu-level").show();
    }).mouseout(function () {
        $(".main-submenu-level").hide();
    });

    loadPage("hcontent.html");

});

/**  加载选中内容 */
function loadPage(url) {
    $("#main-content").load(url,function () {

    });
}









