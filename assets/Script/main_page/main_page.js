require("../../logic/ui_base")

// 主界面
cc.Class({
    name: "MainPage",
    extends: UIBaseView,
    properties: {
        lab_name: {default: null, type: cc.Label},
        lab_age: {default: null, type: cc.Label},
        lab_date: {default: null, type: cc.Label},
        lab_exp: {default: null, type: cc.Label},
        lab_status: {default: null, type: cc.Label},
        lab_ptitle: {default: null, type: cc.Label},
        lab_ip: {default: null, type: cc.Label},
        scro_info: {default: null,type: cc.ScrollView},
    },

    onLoad(){
        this.labe_name = CC_UTIL.find_label("top/lab_name", this.rootNode);
        this.lab_age = CC_UTIL.find_label("top/lab_name/lab_age", this.rootNode);
        this.lab_date = CC_UTIL.find_label("top/lab_date", this.rootNode);
        this.lab_exp = CC_UTIL.find_label("top/lab_exp", this.rootNode);
        this.lab_status = CC_UTIL.find_label("top/lab_status", this.rootNode);
        this.lab_ptitle = CC_UTIL.find_label("top/lab_ptitle", this.rootNode);
        this.lab_ip = CC_UTIL.find_label("bottom/lab_ip", this.rootNode);
        this.scro_info = CC_UTIL.find_component("node_log/scro_info", this.rootNode, cc.ScrollView);
    },
    
    // // LIFE-CYCLE CALLBACKS:
    // onLoad () {
    //     NoticeManager.BeginListen(EXBNotice.UpdateExp, this, this.refreshExp)
    // },

    updateUi(){

    },



    start () {
        this.lab_name.string = "xiangry";
        this.lab_ip.string = "127.0.0.1:10101";
        console.log("DataCenter value", DataCenter.age);
        this.refreshAge();
        this.refreshExp();
    },

    refreshAge() {
        this.lab_age.string = "" + DataCenter.age;
    },
    refreshExp() {
        this.lab_exp.string = "" + DataCenter.exp;
    },

    close(){

    },

    // update (dt) {},
});
