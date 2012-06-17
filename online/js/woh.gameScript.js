/**
 * stage controler
 */
//剧情脚本读取
Laro.NS('woh.gameScript', function (L) {

    var script = null;
    //this.stageTag = '1';
        
    this.startExec = function(_script,id){
        script = _script;
        woh.runtime.stageTag = id;
        //console.log(woh.runtime.scriptProcess);
        woh.runtime.searchScriptProcess(id)?this.continueExec():woh.stage.go(script[id].type,script[id].data);//若开始节点已存在于不可重复列表中，则执行下一节点
    }
    this.continueExec = function(){
        with(script){
            do{
                woh.runtime.stageTag = script[woh.runtime.stageTag].next;
            }while(woh.runtime.searchScriptProcess(woh.runtime.stageTag));//判断当前剧情节点是否存在于“已触发”列表中
            if(!script[woh.runtime.stageTag].repeat){//如果节点不可重复，则在“已发生”列表中添加剧情节点的Tag
                woh.runtime.insertScriptProcess(woh.runtime.stageTag);
                //console.log(woh.runtime.scriptProcess);
            }
            with(script[woh.runtime.stageTag])
                woh.stage.go(type,data);
        }
    }
    
});
