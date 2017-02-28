/**
 * Created by Zouhua on 2016/8/23.
 */
var $lis = $("#nav_js>#nav_item>.nav-list");
$lis.mouseenter(function(){
    $(this).addClass("hover");
}).mouseleave(function(){
    $(this).removeClass("hover");
})