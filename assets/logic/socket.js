require("./message")

const XBSocket = function(){
    this._is_onnected = false;
}

XBSocket.prototype.connect = function (func){
    var self = this;
    this.socket = require("socket.io")("http://localhost:10101");
    this.socket.on("*", function (socket) {
        console.log("*  socket ==== ", socket);
        this.isConnected = true;
        if (func){
            func()
        }
    })
    this.socket.on("s2ccmd", function (msg) {
        self.reciveMsg(msg)
    });
}

XBSocket.prototype.reciveMsg = function (msg){
    var data = JSON.parse(msg);
    console.log("recive server data: ", data);
    NoticeManager.Notice(data.p, msg);
}

XBSocket.prototype.sendMsg = function (msg){
    this.socket.emit("c2scmd", msg)
}

XBSocket.prototype.isConnected = function (){
    return this._is_onnected;
}
module.exports = XBSocket