const EnumXB = require("enum")

var DataCenter = cc.Class({
    name: "DataCenter",
    ctor: function () {
        this.name = "xiangry";
        this.title = "小学渣";
        this.age = 999999;
        this.exp = 9995558;
        this.status = EnumXB.EXBStatus.Learn;
    }
})

module.exports = DataCenter