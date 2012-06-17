//用来存储运行时数据的文件
Laro.NS('woh.runtime', function (L) {
    this.stageTag = '1';//初始化一个用以记录当前剧情进程的值
    this.scriptProcess=[];//维护一个数组，存储已触发过的不可重复剧情节点
    this.searchScriptProcess=function(key){//查询数组中是否存在相应的元素
    	var i=0,
    	    j=this.scriptProcess.length-1;
    	    exist=false;
    	do{
    		var mid=Math.round((i+j)/2);
    		if(key==this.scriptProcess[mid]){return true;}
    		if(key<this.scriptProcess[mid]){
    			j=mid;
    		}
    		else{
    			i=mid;
    		}
    	}while(i<j);

        return exist;
    },
    this.insertScriptProcess=function(key){
    	this.scriptProcess.push(key);
    	this.scriptProcess.sort();
    },
    this.init=function(){
    	//this.insertScriptProcess('4');
        //this.scriptProcess.sort();
    	//console.log(this.searchScriptProcess('4'));
    }
});