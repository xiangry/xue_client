const PlayerData = cc.Class({
    name: "PlayerData",
    ctor: function () {
        this.uid = "";
        this.name = "";
        this.level = 1;
        this.exp = 100;
    },
})

module.exports = PlayerData
