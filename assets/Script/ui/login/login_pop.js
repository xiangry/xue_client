cc.Class({
    name: "LoginPop",
    extends: UIBaseView,
    properties: {
        prefab: "ui/login/login_pop",
        lab_title: null,
        btn_login: null,
        btn_register: null,
    },

    onLoad(){
        this.btn_login = CC_UTIL.find_button("board/btn_board/button", this.rootNode);
        this.btn_register = CC_UTIL.find_button("board/btn_board/btn_register", this.rootNode);
        this.input_account = CC_UTIL.find_component("board/input_account/editbox", this.rootNode, cc.EditBox);
        this.input_pwd = CC_UTIL.find_component("board/input_pwd/editbox", this.rootNode, cc.EditBox);

        this.btn_login.node.on('click', this.onLoginClick, this)
        this.btn_register.node.on('click', this.onRegisterClick, this)
    },

    onLoginClick: function (event, data) {
        var account = this.input_account.string;
        var password = this.input_pwd.string;

        console.log("user account info: ", account, password, "----");
        this.doLoginServer(account, password);
    },

    onRegisterClick: function (event, data) {
        // UIManager.PushUi(EUI.RegisterPop);
        // UIManager.PushUi(EUI.Float, {text: "哈哈哈哈哈"})
        UIManager.PushUi(EUI.MessagePop, {
            okFunc: function () {
                UIManager.PushUi(EUI.Float, {text: "ok ok ok ok"})
            },
            cancelFunc: function () {
                UIManager.PushUi(EUI.Float, {text: "cancel cancel cancel cancel"})
            },
        })

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
