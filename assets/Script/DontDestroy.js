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

        XBScheduler.scheduleOnce(function () {
            XBSocket.connect();
        }, 1)
    },
});
