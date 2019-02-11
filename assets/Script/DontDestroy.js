/**
 * 常驻脚本
 */



require("./util/game")



cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        XBScheduler.setComponent(this);

        UIManager.PushUi(EUI.Launch)

        // XBScheduler.scheduleOnce(function () {
        //     XBSocket.connect();
        // }, 1)
    },
});
