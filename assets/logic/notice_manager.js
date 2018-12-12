const Notice_manager = cc.Class({
    name: "Notice_manager",
    ctor: function () {
        this.linsters = {};

    },

    Notice(notice) {
        var list = this.linsters[notice]
        if(list != undefined && list.length > 0){
            list.forEach(function (linster, index) {
                linster.func.call(linster.obj, linster.notice)
            })
        }
    },

    BeginListen(notice, obj, func) {
        console.log("----BeginListen", notice)
        if(this.linsters[notice] == undefined){
            this.linsters[notice] = []
        }
        var list = this.linsters[notice];
        list.push({notice:notice, obj:obj, func:func})
    },

    EndListen(notice, obj, func) {
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

module.exports = Notice_manager