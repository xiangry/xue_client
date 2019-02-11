window.EXBId = cc.Enum({

});

window.EXBNotice = cc.Enum({
    Login: "login",
    LoginSuccess: "login_success",
    UpdateExp: "update_exp",
    S2CCMD: "s2c_cmd",
});

window.EXBValue = cc.Enum({

});

window.EXBStatus = cc.Enum({
    Learn: 1,
})

window.XBEnum = {
    EXBId: EXBId,
    EXBNotice: EXBNotice,
    EXBConst: EXBValue,
    EXBStatus: EXBStatus,
}