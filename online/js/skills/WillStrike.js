/**
 * ¼¼ÄÜÓ°Ïì
 */
Laro.NS('woh', function (L) {
    this.WillStrike = L.Class(function (data,level) {
        this.damage = data.damage[level] ;
    }).methods({
        convert:function(d){
            d.damage+= this.damage;
        }
    });
})