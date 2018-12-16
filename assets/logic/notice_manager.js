const XBNoticeManager = cc.Class({
    name: "XBNoticeManager",
    ctor: function () {
        this.linsters = {};

    },

    Notice(notice) {
        var list = this.linsters[notice]
        console.log("this.linsters ==== ", this.linsters);
        if(list != undefined && list.length > 0){
            list.forEach(function (linster, index) {
                linster.func.call(linster.notice, linster.obj)
            })
        }
    },

    BeginListen(notice, func, obj) {
        console.log("----BeginListen", notice)
        if(this.linsters[notice] == undefined){
            this.linsters[notice] = []
        }
        var list = this.linsters[notice];
        list.push({notice:notice, obj:obj, func:func})
    },

    EndListen(notice, func, obj) {
        if(this.linsters[notice] != undefined){
            for (let i = 0; i < this.linsters[notice].length; i++) {
                var linster = this.linsters[notice][i];
                if(linster.obj == obj){
                    this.linsters[notice].splice(i)
                    break;
                }
            }
        }
    }

})

module.exports = XBNoticeManager