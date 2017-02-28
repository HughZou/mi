/**
 * Created by Zouhua on 2016/8/26.
 */
znyjItem("znyj_bd");
znyjItem("dp_bd_js");
znyjItem("dp_bd_big");
reviewBox("dp-item");
dapeiTab();
function znyjItem(obj){
    var $lis = $("#"+obj+" li");
    $lis.mouseenter(function(){
        $(this).css({
            "box-shadow":"0px 15px 30px rgba(0,0,0,0.1)"
        }).animate({top:"-=3px"},200)
    })
    $lis.mouseleave(function(){
        $(this).css({
            "box-shadow":"none"
        }).animate({top:"+=3px"},200)
    })
}
function reviewBox(obj){
    var $lis = $("."+obj);
    $lis.mouseenter(function(){
        $(this).children(".dp-wrapper").animate({bottom:"0"},200);
    })
    $lis.mouseleave(function(){
        $(this).children(".dp-wrapper").animate({bottom:"-76"},200);
    })
}
function dapeiTab(){
    $("#dp_hd_tab span:first").addClass("dp-active");
    $("#dp_bd_js .dp-bd:first").show().siblings().hide();
    $("#dp_hd_tab span").hover(function(){
        var that = this;
        function tabWay(){
            $(that).addClass("dp-active").siblings().removeClass("dp-active");
            $("#dp_bd_js>.dp-bd").eq($("#dp_hd_tab span").index(that)).show().siblings().hide();

        }
        timer = setTimeout(tabWay,200); // 延时执行
    },function(){
        clearTimeout(timer);    // 鼠标离开清除定时器
    })
}