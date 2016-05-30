//依赖于 jquery
var swiperDel = (function(){
    var swiperDel = function(){
        this.swiperDelete = function(domId,left,time){
            var xx,yy,XX,YY,swipeX,swipeY, k= 0;
            domId.on("touchstart",function(e){
                xx  = e.originalEvent.targetTouches[0].screenX;
                yy  = e.originalEvent.targetTouches[0].screenY;
                swipeX = true;
                swipeY = true ;
            });
            var openLeft = true;
            var openRight = true;
            domId.children("li").on("touchmove",function(e){
                XX = e.originalEvent.targetTouches[0].screenX ;
                YY = e.originalEvent.targetTouches[0].screenY ;
                if(swipeX && Math.abs(XX-xx)-Math.abs(YY-yy)>0){//左右滑动
                    e.preventDefault();//阻止浏览器默认事件
                    swipeY = false ;
                    if(Math.round(xx) < Math.round(XX)){ //左滑动
                        if( openRight == true){
                            $(this).css({"transform":"translateX(0px)","transition":time});
                            openRight =false;
                        };
                    }else if(Math.round(xx) > Math.round(XX)){//右滑动
                        if( openLeft  ==  true){
                            $(this).css({"transform":left,"transition":time});
                            openLeft  = false;
                        };
                    };
                }else if(swipeY && Math.abs(XX-xx)-Math.abs(YY-yy)<0){//上下滑动
                    swipeX = false ;
                    //上下滑动，使用浏览器默认的上下滑动
                };
            });
            domId.children("li").on("touchend",function(){   //开关
                openRight = true;
                openLeft = true;
            });
            domId.find(".mc-btn-del").on("touchstart",function(){
                $(this).parent().remove();
            });
        };
    };
    return swiperDel;
})();

