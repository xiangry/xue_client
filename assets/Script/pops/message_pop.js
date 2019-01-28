cc.Class({
    name: "MessagePop",
    extends: UIBaseView,
    properties: {
        prefab: "ui/pops/message",
        btn_ok: null,
        btn_cancel: null,
        okFunc: null,
        cancelFunc: null,
    },

    ctor(){
        this.cancelFunc = this.params.cancelFunc;
        this.okFunc = this.params.okFunc;
        if(this.params.msg){
            this.msg = this.params.msg;
        }else{
            this.msg = "没有提示信息";
        }
    },

    onLoad(){
        this.lab_msg = CC_UTIL.find_label("board/content/lab_msg", this.rootNode);
        this.btn_ok = CC_UTIL.find_button("board/btn_board/btn_ok", this.rootNode);
        this.btn_cancel = CC_UTIL.find_button("board/btn_board/btn_cancel", this.rootNode);

        this.btn_ok.node.on('click', this.onOKClick, this)
        this.btn_cancel.node.on('click', this.onCancelClick, this)
        this.lab_msg.string = this.msg

    },

    onOKClick: function (event, data) {
        UIManager.PopUi(EUI.MessagePop);
        if(this.okFunc != null){
            this.okFunc()
        }
    },

    onCancelClick: function (event, data) {
        UIManager.PopUi(EUI.MessagePop);
        if(this.cancelFunc != null){
            this.cancelFunc()
        }
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
