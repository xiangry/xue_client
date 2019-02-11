cc.Class({
    extends: UIBaseView,
    name: "Float",
    properties: {
        prefab: "ui/pops/float",
        lab_tip: null,
    },

    onLoad(){
        self = this
        this.lab_tip = CC_UTIL.find_label("mask/lab_tip", this.rootNode);

        this.lab_tip.string = self.params.text

        var anim =  CC_UTIL.find_anim("mask", this.rootNode);
        anim.on("play", this.onAnimEvent, this)
        anim.on("finished", this.onAnimEvent, this)
        anim.play("float_move_stay")
    },

    onAnimEvent: function(string){
        console.log("onAnimEvent onAnimEvent", string);
        if (string === "finished"){
            UIManager.PopUi(EUI.Float)
}
},

    onEnter(){
    },

})