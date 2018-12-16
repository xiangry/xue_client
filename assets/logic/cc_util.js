window.CC_UTIL = {}

CC_UTIL.find_component = function (path, referenceNode, _class) {
    return cc.find(path, referenceNode).getComponent(_class);
}

CC_UTIL.find_label = function (path, referenceNode) {
    return cc.find(path, referenceNode).getComponent(cc.Label);
}

CC_UTIL.find_button = function (path, referenceNode) {
    return cc.find(path, referenceNode).getComponent(cc.Button);
}



CC_UTIL.load_prefab = function (path, fn, parent) {
    console.log("load_prefab load_prefab:", path);
    cc.loader.loadRes(path, function(err, prefab){

        //检查资源加载
        if(err) {
            cc.log( '载入预制资源失败, 原因:' + err );
            return;
        }

        if( !( prefab instanceof cc.Prefab ) ) {
            cc.log( '你载入的不是预制资源!' );
            return;
        }

        //开始实例化预制资源
        var fabNode = cc.instantiate(prefab);

        parent = parent || cc.find("Canvas");
        //将预制资源添加到父节点
        fabNode.parent = parent

        return fn(fabNode);
    })
}