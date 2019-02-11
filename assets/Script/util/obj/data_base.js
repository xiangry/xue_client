const DataBase = cc.Class({
    name: "DataBase",
    ctor: function () {
        this.id = "";
        this.cid = "";
        this.data = "";
        this.cfg = ""
    },

    GetId: function () {
        return this.id;
    },

    GetCId: function () {
        return this.cid;
    },

    GetData: function () {
        return this.data;
    },
    GetCfg: function () {
        return this.cfg;
    },

})

module.exports = DataBase
