define([
    'Ash'
], function(
    Ash
) {
    var Position = Ash.Class.extend({
        constructor: function(x, y) {
            this.x = x;
            this.y = y;
        }
    });

    return Position;
});
