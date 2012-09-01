//用来存储运行时数据的文件
Laro.NS('woh.runtime', function (L) {
    this.stageTag = 'loading_1';//初始化一个用以记录当前剧情进程的值
    this.scriptProcess=[];//维护一个数组，存储已触发过的不可重复剧情节点
    this.searchScriptProcess=function(key){//查询数组中是否存在相应的元素
    	var i=0,
    	    j=this.scriptProcess.length-1;
    	    exist=false;
    	while(i<=j){
    		var mid=Math.round((i+j)/2);
    		if(key==this.scriptProcess[mid]){
                return true;
            }
    		else if(key>this.scriptProcess[mid]){
    			i=mid+1;
    		}
    		else{
    			j=mid-1;
    		}
    	}
        return exist;
    },
    this.insertScriptProcess=function(key){
    	this.scriptProcess.push(key);
    	this.scriptProcess.sort();
    },
    this.role=null,//全部人物的运行时数据
    this.activeRole=[],//活动人物的列表，初始值为唐如一个人
    this.packageItems=[];//物品列表
    this.cdCounter={}; 
    this.mapState=
    this.init=function(){
        this.packageItems=[];
        this.scriptProcess=[];
        this.stageTag ='intro';
        //初始化运行时人物数据
        this.role=eval('('+JSON.stringify(woh.role_init_data)+')');
        console.log(this.role);  
        this.activeRole.push(this.role['001']);
        //初始化技能CD计算列表
        for(var key in woh.skill_data){
            this.cdCounter[key]={cdTime:woh.skill_data[key]['cd'],cd:false};
        }
        console.log(this.cdCounter);
    }
});