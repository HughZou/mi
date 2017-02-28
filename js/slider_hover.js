/*Created by Zouhua on 2016/8/23*/
bannerMove();
bannerNav();
function bannerMove(){
    var $imgs = $("#banner_slider_con>div");
    var $spans = $("#banner_slider_ctrl>span");
    var iNow = 0;
    var timer = null;
    // 图片变换
    function change(index){
        $imgs.eq(index).css("zIndex",10).siblings().css("zIndex",1);
        $imgs.eq(index).fadeIn(1200).siblings().fadeOut(1200);
        $spans.eq(index).addClass("active").siblings().removeClass("active");
    }
    // 定时器 自动播放
    timer = setInterval(function(){
        iNow++;
        iNow>$imgs.length-1?iNow=0:iNow;
        change(iNow);
    },3000)
    // 鼠标放到span时
    $spans.hover(function(){
        iNow = $(this).index();
        function spanWay(){
            change(iNow);
        }
        timer1 = setTimeout(spanWay,400);
    },function(){
        clearTimeout(timer1);
    })
    // 鼠标移入停止播放
    $("#banner_js").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            iNow++;
            iNow>$imgs.length-1?iNow=0:iNow;
            change(iNow);
        },3000)
    })
}
function bannerNav(){
    var $lis = $("#banner_nav_con>li");
    $lis.mouseenter(function(){
        $(this).addClass("active");
    }).mouseleave(function(){
        $(this).removeClass("active");
    })
}