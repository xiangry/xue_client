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
        NoticeManager.BeginListen(EMsgProto.Login, this.showLogin, this);
        NoticeManager.BeginListen(EXBNotice.LoginSuccess, function () {
            UIManager.PopUi(EUI.LoginPop);
            UIManager.PushUi(EUI.MainPage);
        })
    },

    showLogin(){
        UIManager.PushUi(EUI.LoginPop);
        // UIManager.PushUi(EUI.MainPage);
    },
});
