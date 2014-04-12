define([
    'Ash'
], function (Ash) {
    var TickProvider = Ash.Class.extend({
        ticked: new Ash.Signals.Signal(),
        request: null,
        isRunning: false,
        constructor: function () {
        },

        start: function () {
            this.isRunning = true;
            this.previousTime = 0;
            this.request = window.requestAnimationFrame(this.tick.bind(this));
        },

        stop: function () {
            this.isRunning = false;
            window.cancelAnimationFrame(this.request);
        },

        add: function (listener, context) {
            this.ticked.add(listener, context);
        },

        remove: function (listener, context) {
            this.ticked.remove(listener, context);
        },

        removeAll: function () {
            this.ticked.removeAll();
        },

        tick: function (timestamp) {
            if (this.isRunning) {
                var tmp = this.previousTime || timestamp;
                var delta = (timestamp - tmp) * 0.001;
                this.previousTime = timestamp;

                this.ticked.dispatch(delta);
                window.requestAnimationFrame(this.tick.bind(this));
            }
        }
    });

    return TickProvider;
});
