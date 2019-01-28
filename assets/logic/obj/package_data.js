const PackageData = cc.Class({
    name: "PackageData",
    ctor: function () {
        this.items = {}
        this.roles = {}
    },

    GetRoles: function () {
        return this.roles;
    },

    GetItems: function () {
        return this.items;
    }
})

module.exports = PackageData
