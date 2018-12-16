cc.Class({
    name: "LoginPop",
    extends: UIBaseView,
    properties: {
        prefab: "ui/login/login_pop.fire",
        lab_title: null,
        btn_login: null,
    },

    onLoad(){
        this.lab_title = CC_UTIL.find_label("board/title", this.rootNode);
        this.btn_login = CC_UTIL.find_button("board/button", this.rootNode);
        this.input_account = CC_UTIL.find_component("board/input_account/editbox", this.rootNode, cc.EditBox);
        this.input_pwd = CC_UTIL.find_component("board/input_pwd/editbox", this.rootNode, cc.EditBox);

        this.btn_login.node.on('click', this.onLoginClick, this)
    },

    onLoginClick: function (event, data) {
        var account = this.input_account.string;
        var password = this.input_pwd.string;
        
        console.log("user account info: ", account, password, "----");
        this.doLoginServer(account, password);
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