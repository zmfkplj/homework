/**
 * Created by Administrator on 2017/4/9.
 */
$(".focus-nar-menu-title").click(function () {
    $(".focus-nar-menu ul").toggle();

    var arrowClassName = $("#focus-nar-menu-arrow").attr("class");
    if(arrowClassName == "focus-nar-menu-arrow-down"){
        $("#focus-nar-menu-arrow").attr("class", "focus-nar-menu-arrow-right");
    }else if(arrowClassName = "focus-nar-menu-arrow-right"){
        $("#focus-nar-menu-arrow").attr("class", "focus-nar-menu-arrow-down");
    }
});

$(".focus-nar-menu-title").hover(function () {
    $(".focus-nar-menu-arrow-edit").toggle();
});

