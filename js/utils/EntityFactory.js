define([
    'Ash',
    'components/Position',
    'components/Velocity',
    'components/Display'
], function(
    Ash,
    Position,
    Velocity,
    Display
) {
    var EntityFactory = Ash.Class.extend({
        constructor: function(engine) {
            this.engine = engine;
        },
        createDumpling: function(x, y, vx, vy) {
            var self = this;
            var img = new Image();

            img.src = 'images/dumpling.jpg';
            img.onload = function() {
                var displayObject = new createjs.Bitmap(img);
                var dumpling = new Ash.Entity()
                    .add(new Position(x, y))
                    .add(new Velocity(vx, vy))
                    .add(new Display(displayObject));

                self.engine.addEntity(dumpling);
            };
        }
    });

    return EntityFactory;
});
