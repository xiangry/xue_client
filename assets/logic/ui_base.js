const UIBaseView = cc.Class({
    name: "UIBaseView",
    properties: {
        rootNode: null,
        prefab: "",
    },
    path: "",
    ctor(params = {}){
        var self = this;
        this.params = params
        CC_UTIL.load_prefab(this.prefab, function (fabNode) {
            self.rootNode = fabNode;
            self.onLoad();
            self.onEnter();
        })
    },

    onLoad(){
        console.log("onLoad --------------");
    },

    onEnter(){

    },

    close(){
        console.log("close --------------");
        if (this.rootNode){
            this.rootNode.removeFromParent(true)
            this.rootNode = null;
        }
        this.onDestroy();
    },

    onDestroy(){
        console.log("onDestroy --------------");

    },
})

window.UIBaseView = UIBaseView

module.exports = UIBaseView
