var XBScheduler = function () {
    this.component = null;
}

XBScheduler.prototype.setComponent = function(component){
    this.component = component;
}

XBScheduler.prototype.schedule = function(func, interval, repeat, delay){
    return this.component.schedule(func, interval, repeat, delay);
}

XBScheduler.prototype.scheduleOnce = function(func, interval){
    return this.component.scheduleOnce(func, interval);
}

XBScheduler.prototype.unschedule = function(sid){
    return this.component.unschedule(sid);
}

XBScheduler.prototype.unscheduleAllCallbacks = function(sid){
    return this.component.unscheduleAllCallbacks();
}

window.XBScheduler = new XBScheduler()

