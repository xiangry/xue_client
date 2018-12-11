// 主界面
cc.Class({
    extends: cc.Component,

    properties: {
        lab_name: {
            default: null,
            type: cc.Label
        },
        scro_view: {
            default: null,
            type: cc.ScrollView,
        },
        lab_status: {
            default: null,
            type: cc.Label
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.lab_name.string = "xiangry";
        this.lab_status.string = "127.0.0.1:10101";
    },

    // update (dt) {},
});
