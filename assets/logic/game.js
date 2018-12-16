require("./enum");
require("./global");
require("./cc_util");
require("./ui_base");
require("./scheduler");

const socket = require("./socket");
const notice_manager = require("./notice_manager");
const data_center = require("./data_center");
const ui_manager = require("./ui_manager");



window.NoticeManager = new notice_manager();
window.DataCenter = new data_center();
window.XBSocket = new socket();
window.UIManager = new ui_manager();
