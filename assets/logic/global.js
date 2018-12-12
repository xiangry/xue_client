/**
 * 全局变量
 * @type {{}}
 */

const EnumXB = require("./enum")
const DataCenter = require("./data_center")
const NoticeManager = require("./notice_manager")

window.G = {
    EXBStatus: EnumXB.EXBStatus,
    DataCenter: new DataCenter(),
    NoticeManager: new NoticeManager(),
}