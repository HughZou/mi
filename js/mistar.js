/**
 * Created by Zouhua on 2016/8/24.
 */
sliderMove();
function sliderMove(){
    var $spans = $("#mistar_ctrl>span");
    var $oul = $("#slider_mistar_main") ;

    $spans.click(function(){
       if(this.className === "mistar-ctrl-prev"){
           $oul.animate({left:0},400);
           $(this).addClass("mistarstop").siblings().removeClass("mistarstop");
       }else if(this.className === "mistar-ctrl-next"){
            $oul.animate({left:-1240},400);
           $(this).addClass("mistarstop").siblings().removeClass("mistarstop");
       }
    })
}
