cc.Class({
    extends: cc.Component,

    properties: {
        scro_view: {
            default: null,
            type: cc.ScrollView
        },
        content: {
            default: null,
            type: cc.Node
        },
        item: {
            default: null,
            type: cc.Prefab
        },
        data: null
    },

    // LIFE-CYCLE CALLBACKS:
    start () {
        this.data = []
    },

    onLoad () {
        this.initScrollView();
    },


    initScrollView(){
        var height = 250 + 5;
        for (let i = 0; i < 12; i++){
            var item = cc.instantiate(this.item);
            item.idx = i;
            // 触摸回调
            item.on(cc.Node.EventType.TOUCH_END, this.btnItemClickHandler, this);
            item.getComponent("info_item").setInfo("index:" + i)
            this.content.addChild(item)
            height -= (item.height + 5);
            item.y = height;
        }
        this.content.height = Math.max(height, 500)
    },

    btnItemClickHandler(btn){
        window.console.log(btn)
        window.console.log(btn.target.idx)
    }

    // update (dt) {},
});
