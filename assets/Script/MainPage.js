const EXBNotice = require("../logic/enum").EXBNotice

// 主界面
cc.Class({
    extends: cc.Component,

    properties: {
        lab_name: {default: null, type: cc.Label},
        lab_age: {default: null, type: cc.Label},
        lab_date: {default: null, type: cc.Label},
        lab_exp: {default: null, type: cc.Label},
        lab_status: {default: null, type: cc.Label},
        lab_title: {default: null, type: cc.Label},
        lab_ip: {default: null, type: cc.Label},

        scro_view: {default: null,type: cc.ScrollView},
        lab_status: {default: null,type: cc.Label},


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        G.NoticeManager.BeginListen(EXBNotice.UpdateExp, this, this.refreshExp)
    },

    start () {
        this.lab_name.string = "xiangry";
        this.lab_ip.string = "127.0.0.1:10101";
        console.log("DataCenter value", G.DataCenter.age);
        this.refreshAge();
        this.refreshExp();
    },

    refreshAge() {
        this.lab_age.string = "" + G.DataCenter.age;
    },
    refreshExp() {
        this.lab_exp.string = "" + G.DataCenter.exp;
    }

    // update (dt) {},
});
