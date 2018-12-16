cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        this.registMsgFunc();
    },

    openLoginPop(){
        UIManager.PushUi(EUI.LoginPop);
    },

    registMsgFunc(){
        var self = this;
        NoticeManager.BeginListen(EMsgProto.Login, this.showLogin, this)
    },

    showLogin(){
        UIManager.PushUi(EUI.LoginPop);
    },
});
