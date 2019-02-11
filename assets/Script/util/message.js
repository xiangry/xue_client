require("./proto")

var __stringify = JSON.stringify

function c2smsg_login(account, password){
    return __stringify({p:EMsgProto.Login, account:account, password:password});
};

window.XBS2CMsgFuncs = {
    MsgLogin: c2smsg_login
};
