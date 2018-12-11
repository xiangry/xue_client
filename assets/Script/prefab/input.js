
cc.Class({
    extends: cc.Component,

    properties: {

        title: {
            default: null,
            type: cc.Label
        },

        editbox: {
            default: null,
            type: cc.EditBox
        },
    },

    start () {
        // this.label.string = this.title;
    },

    // update (dt) {},
});
