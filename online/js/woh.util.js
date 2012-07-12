/* util methods */
Laro.NS('woh.util', function (L) {
    /**
     * 获取点击的事件源, 该事件源是有 data-cmd 属性的 默认从event.target往上找三层,找不到就返回null
     */
    function getActionTarget (event, level, property, parent){
        var t = event.target,
            l = level || 3,
            s = level !== -1,
            p = property || 'data-cmd',
            end = parent || document.body;
        while(t && (t !== end) && (s ? (l-- > 0) : true)){
            if(t.getAttribute(p)){
                return t;
            }else{
                t = t.parentNode;
            }
        }
        return null;
    }
    
    this.getActionTarget = getActionTarget;
});