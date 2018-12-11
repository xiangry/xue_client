const Constants = require("../logic/enum")
const EXBNotice = Constants.EXBNotice

cc.Class({
    extends: cc.Component,

    properties: {
        title: {
            default: null,
            type: cc.Label
        },
        button: {
            default: null,
            type: cc.Button
        },
        node_account: {
            default: null,
            type: cc.Node
        },
        node_pwd: {
            default: null,
            type: cc.Node
        },
        // defaults, set visually when attaching this script to the Canvas
        text: '学霸登录系统'
    },

    // use this for initialization
    onLoad: function () {
        // let label = this.lab_title.getComponent(cc.Label)
        this.title.string = this.text;

        let input_account = this.node_account.getComponent('input')
        input_account.title.string = "账号"

        let input_pwd = this.node_pwd.getComponent('input')
        input_pwd.title.string = "密码"

    },

    // called every frame
    update: function (dt) {

    },

    on_login(event, customEventData){
        console.log("event=", event, "data=", customEventData)
        cc.log(EXBNotice.Login)
    }
});
