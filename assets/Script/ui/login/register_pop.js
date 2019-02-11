cc.Class({
    name: "RegisterPop",
    extends: UIBaseView,
    properties: {
        prefab: "ui/login/register.fire",
        lab_title: null,
        btn_ok: null,
        btn_cancel: null,
    },

    onLoad(){
        this.lab_title = CC_UTIL.find_label("board/title", this.rootNode);
        this.btn_ok = CC_UTIL.find_button("board/btn_board/btn_ok", this.rootNode);
        this.btn_cancel = CC_UTIL.find_button("board/btn_board/btn_cancel", this.rootNode);
        this.btn_register = CC_UTIL.find_button("board/btn_board/btn_register", this.rootNode);
        this.input_account = CC_UTIL.find_component("board/input_account/editbox", this.rootNode, cc.EditBox);
        this.input_pwd = CC_UTIL.find_component("board/input_pwd/editbox", this.rootNode, cc.EditBox);
        this.input_confirm = CC_UTIL.find_component("board/input_confirm/editbox", this.rootNode, cc.EditBox);

        this.btn_ok.node.on('click', this.onOk, this)
        this.btn_cancel.node.on('click', this.onCancel, this)
    },

    onOk: function (event, data){
        var account = this.input_account.string;
        var password = this.input_pwd.string;
        var account = this.input_confirm.string;

        UIManager.PushUi(EUI.Float)
    },

    onCancel: function (event, data) {
    },

    doLoginServer(account, password){
        if (this.isLogining){return;}
        this.isLogining = true;

        NoticeManager.BeginListen(EMsgProto.LoginSuccess, this.loginCallBack, this);
        XBSocket.sendMsg(XBS2CMsgFuncs.MsgLogin(account, password));
    },

    loginCallBack(data){

    }

})