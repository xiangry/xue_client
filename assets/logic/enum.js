const  EXBId = cc.Enum({

});

const EXBNotice = cc.Enum({
    Login: "login",
    LoginSuccess: "login_success",
    UpdateExp: "update_exp",
});

const EXBValue = cc.Enum({

});

const EXBStatus = cc.Enum({
    Learn: 1,
})

module.exports = {
    EXBId: EXBId,
    EXBNotice: EXBNotice,
    EXBConst: EXBValue,
    EXBStatus: EXBStatus,
}