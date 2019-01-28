require("./proto")

const PlayerData = require("./obj/player_data")
const PackageData = require("./obj/package_data")


var XBDataCenter = cc.Class({
    name: "DataCenter",
    ctor: function () {
        this.name = "xiangry";
        this.title = "小学渣";
        this.age = 999999;
        this.exp = 9995558;
        this.status = EXBStatus.Learn;
        this.player = new PlayerData();
        this.package = new PackageData();

        this.listenServer();


    },

    listenServer(){
        NoticeManager.BeginListen(EMsgProto.FirstData, function (msg) {
            NoticeManager.Notice(EXBNotice.LoginSuccess)
        })
    }
})

module.exports = XBDataCenter
