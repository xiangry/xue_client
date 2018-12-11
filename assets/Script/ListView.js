
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
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.initScrollView();
    },

    initScrollView(){
        var height = 0;
        for (let i = 0; i < 30; i++){
            var item = cc.instantiate(this.item);
            item.idx = i;
            // 触摸回调
            item.on(cc.Node.EventType.TOUCH_END, this.btnItemClickHandler, this);
            // item.getComponent("info_item").setType()
            this.content.addChild(item)
            // window.console.log("----", item.height, height)
            item.y = 500 - height;
            height += item.height + 5;
        }
        this.content.height = height
    },

    btnItemClickHandler(){
        window.console.log("----")
    }

    // update (dt) {},
});
