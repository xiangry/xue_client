cc.Class({
    name: "Launch",
    extends: UIBaseView,
    properties: {
        prefab: "ui/launch/launch",
        lab_tip: null,
        progressbar: null,
    },

    onLoad(){
        this.lab_title = CC_UTIL.find_label("lab_tip", this.rootNode);
        this.progressbar = CC_UTIL.find_progressbar("progress", this.rootNode);

        this.lab_title.string = "大大大大大大大大大大大大大大";
        this.progressbar.progress = 0.3;

    },

    onEnter(){
        this.doConnect();
    },


    doConnect(){
        XBScheduler.scheduleOnce(function () {
            XBSocket.connect();
        }, 1)
    },



})