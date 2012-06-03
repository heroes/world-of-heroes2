/**
 * 背包
 * @author
 */
(function(_win){

	var _doc = _win.document;

	var packetManager = _win.packetManager = {
		init : function(){
			packetManager.article.init();
		},
		unInit : function(){

		}
	};






	//道具管理
	packetManager.article = {
		tpl : '<article class="item_icon"></article>',
		total :28,
		data : {},
		init : function() {
			this.render();
			this.bind();
		},
		unInit : function(){
			this.unbind();
		},
		render : function(){
			var items = [];
			for(var i = 0; i < this.total; i++){
				items.push(tmpl(this.tpl, this.data));
			}
			_doc.querySelector('#item_icons div.icon_panel').innerHTML = items.join('');
		},
		bind : function(){

		},
		unbind : function(){

		}
	}
	


	packetManager.init();

})(window);
