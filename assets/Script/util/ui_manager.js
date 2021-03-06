window.EUI = {
    LoginPop: "LoginPop",
    RegisterPop: "RegisterPop",
    MainPage: "MainPage",
    Loading: "Loading",
    Float: "Float",
    Launch: "Launch",
}

var ui_config = {
    LoginPop: {path: "login/login_pop", class: require("../ui/login/login_pop")},
    RegisterPop: {path: "login/register", class: require("../ui/login/register_pop")},
    MainPage: {path: "main_page/main_page", class: require("../ui/main_page/main_page")},
    Loading: {path: "pops/loading", class: require("../ui/pops/loading")},
    Float: {path: "pops/float", class: require("../ui/pops/float")},
    Launch: {path: "launch/launch", class: require("../ui/launch/launch")},
}

// for(var key in ui_config){
//     console.log("keykeykey  ", key);
//     var ui = ui_config[key]
//     ui.class = require(ui.path);
// }

const XBUiManager = function () {
    this.uiStacks = [];
    this.uiCur = undefined;
}

XBUiManager.prototype.PushUi = function(name, params){
    console.log("push ui ", name);
    // 只能显示一个同名ui 先移除上一个ui
    var index = this.indexOfUi(name);
    if (index != undefined) {
        this._popUiByIndex(index);
    }

    var cfg = ui_config[name]
    if(cfg){
        var view = new cfg.class(params);
        this.uiStacks.push({
            name: name,
            view: view
        })
    }
    else {
        console.log("PushUi not find ui setting ");
    }
}

XBUiManager.prototype.PopUi = function(name) {
    if (name != undefined) {
        this._popUiByIndex(this.indexOfUi(name))
    }else {
        this._popUiByIndex(this.uiStacks.length - 1)
    }
}

XBUiManager.prototype._popUiByIndex= function(index){
    if (index != undefined) {
        let ui = this.uiStacks[index];
        if(ui){
            console.log("pop ui ", ui.name);
            this.uiStacks.splice(index);
            ui.view.close();
        }
    }
}

XBUiManager.prototype.indexOfUi= function(name){
    if (name != undefined) {
        for (let i = 0; i < this.uiStacks.length; i++) {
            if (this.uiStacks[i].name === name){
                return i
            }
        }
    }
}

module.exports = XBUiManager