/**
 * 常驻脚本
 */


require("../logic/game")



cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        XBScheduler.setComponent(this);
        console.log("do connect -----  ")
        XBScheduler.scheduleOnce(function () {
            XBSocket.connect();
        }, 1)
    },
});
