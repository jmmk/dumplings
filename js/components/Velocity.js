define([
    'Ash'
], function(
    Ash
) {
    var Velocity = Ash.Class.extend({
        constructor: function(x, y) {
            this.x = x;
            this.y = y;
        }
    });

    return Velocity;
});
