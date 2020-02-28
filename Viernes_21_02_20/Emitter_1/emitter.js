function Emitter() {
    this.event = [];
}
// esta función On guarda dentro de del array la función
Emitter.prototype.on = function (type, listener) {
    this.event[type] = this.event[type] || []
    this.event[type].push(listener);
}

// esta manda a llamar todas la funciones que se mandan dentro del event
Emitter.prototype.emit = function (type) {
    if (this.event[type]) {
        this.event[type].forEach(function (listener) {
            listener()
        })
    }
}

module.exports = Emitter