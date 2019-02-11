cc.Class({
    extends: UIBaseView,
    name: "Loading",
    properties: {
        prefab: "ui/pops/loading",
        lab_tips: null,
        lab_tips: null,
    },

    onLoad(){
        this.lab_loading = CC_UTIL.find_label("lab_loading", this.rootNode);
        this.lab_tips = CC_UTIL.find_label("lab_tips", this.rootNode);

        var button = CC_UTIL.find_button("mask", this.rootNode);
        button.node.on("click", this.onClick, this);
    },

    onEnter(){
        var count = 0;
        var self = this;
        XBScheduler.schedule(function () {
            self.lab_loading.string = count.toString();
            count += 1;
        }, 1)
    },


    updateUi(){

    },

    onClick(){
        console.log("----------------")
    }
})