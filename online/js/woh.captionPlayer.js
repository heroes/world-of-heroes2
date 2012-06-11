/* 字幕播放器 */

Laro.NS('woh', function (L) {
    var pkg = this;
    // 一个段落的字幕
    var Caption = L.Class(function (obj, options) {
        var opt = {
            fxType: 'fade',
            interval: 500,
            duration: 1000,
            beginAfter: 0
        };
        opt = L.extend(opt, options || {});
        this.opt = opt;
        
        var con = [];
        con.push('<div class="caption-con">');
        for (var i = 0; i < obj.data.length; i ++) {
            con.push('<p data-ind="'+i+'">'+ obj.data[i] +'</p>');
        }
        con.push('</div>');
        this.con = con.join('');
        this.timeLength = con.length * (opt.interval + opt.duration) - opt.interval;
        
    }).methods({
        play: function () {
            var _this = this;
            woh.els.drama.innerHTML = this.con;
            this._fixPos();
            var ps = woh.els.drama.querySelectorAll('.caption-con p');

            for (var i = 0; i < ps.length; i ++) {
                var _t = (i+1) * (this.opt.interval + this.opt.duration) + this.opt.beginAfter;
                setTimeout(function (i) {
                    return function () {
                        fx(ps[i], {
                            opacity: 1,
                            duration: _this.opt.duration
                        });
                    }
                    
                }(i), _t);
            }
            
            var __t = (i+1) * (this.opt.interval + this.opt.duration) + this.opt.beginAfter;
            setTimeout(function () {
                fx(woh.els.drama.querySelector('.caption-con'), {
                    opacity: 0,
                    duration: _this.opt.duration
                });
            }, __t);
        },
        _fixPos: function () {
            var container = woh.els.drama.querySelector('.caption-con');
            container.style['marginTop'] = -container.offsetHeight/2 + 'px';
        }
    });
    
    // 播放连续几个段落
    var CaptionPlayer = L.Class(function () {
        this.captions = [];
        this.totalTime = 0;
        
    }).methods({
        add: function (caption) {
            this.captions.push(caption)
        },
        play: function () {
            var _t = 0, 
                _this = this;
            for (var i = 0; i < this.captions.length; i ++) {
                setTimeout(function (i) {
                    return function () {
                        _this.captions[i].play();
                    }
                }(i), _t);
                _t += this.captions[i].timeLength;
            }
            this.totalTime = _t;
        }
    
    });

    this.CaptionPlayer = CaptionPlayer;
    this.Caption = Caption;
});