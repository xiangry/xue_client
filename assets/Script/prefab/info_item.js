// 探索信息item
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        idx: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setInfo(msg) {
        this.label.string = msg;
    }

    // update (dt) {},
});
