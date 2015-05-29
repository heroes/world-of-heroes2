/**
 * stage Drama Class
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this,
        timeSpace = 500;

    var Drama = L.BaseState.extend(function () {
        this.timeInState = 0;
        this.msg = null;
        this.actTime = Number.MAX_VALUE;
        this.skip=false;
    }).methods({
        enter: function (msg, from) {
           this.timeInState = 0;
           woh.els.drama.innerHTML="";
           this.skip=false;
           woh.util.fadeIn(woh.els.drama);
           this.addskipbutton();
           var dramaList= msg,
               Tag=0;
           this.actTime = msg.length+2;//设置播放时间
           var dramaListDOM=document.createElement('ul');
           dramaList.forEach(function(o){
            var Li=document.createElement('li');
                Li.innerHTML=o;
                dramaListDOM.appendChild(Li);
           });
           woh.els.drama.appendChild(dramaListDOM);
           var dramaDomNodes=dramaListDOM.childNodes;
           for(var i=0;i<msg.length;i++){
            dramaDomNodes[i].style.opacity = 0;
           }
           setTimeout(function(){
             if(!this.skip && Tag < msg.length){
                if(dramaDomNodes[Tag].style.opacity == 1) Tag++;
                  else dramaDomNodes[Tag].style.opacity = parseFloat(dramaDomNodes[Tag].style.opacity)+0.2;
                setTimeout(arguments.callee,200);
             }
           },200);
        },
        addskipbutton:function(){
            var skipButton=document.createElement('button');
               skipButton.setAttribute("class","skip");
            woh.els.drama.appendChild(skipButton);
            skipButton.addEventListener('click',function(){
              this.skip=true;
              woh.gameScript.continueExec();
            },false);
        },
        leave: function () {
            woh.log('leave stage [drama]');
            woh.util.fadeOut(woh.els.drama);
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            this.timeInState > this.actTime && woh.gameScript.continueExec();
        },
        draw: function (render) {
        
        }
    
    });

    this.Drama = Drama;

});
