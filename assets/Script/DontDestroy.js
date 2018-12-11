/**
 * 常驻脚本
 */



cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        let socket = require("socket.io")("http://localhost:10101");
        socket.on("s2c_msg", (msg)=> {
            console.log("get msg " + msg);
        })
        console.log("-------")
    },
});
