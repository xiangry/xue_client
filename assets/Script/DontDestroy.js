/**
 * 常驻脚本
 */

const EXBNotice = require("../logic/enum").EXBNotice

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        let socket = require("socket.io")("http://localhost:10101");
        socket.on("s2c_msg", (msg)=> {
            // console.log("get msg " + msg);
            G.DataCenter.exp = parseInt(msg);
            G.NoticeManager.Notice(EXBNotice.UpdateExp)
        })
        console.log("-------")
    },
});
