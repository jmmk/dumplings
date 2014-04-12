define([
    'Ash'
], function(
    Ash
) {
    var Display = Ash.Class.extend({
        constructor: function(displayObject) {
            this.displayObject = displayObject;
        }
    });

    return Display;
});
