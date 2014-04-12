define([
    'Ash',
    'PreloadJs',
    'utils/EntityFactory',
    'utils/TickProvider',
    'systems/SystemPriorities',
    'systems/EaselJsRenderSystem',
    'systems/AnimationSystem'
], function (
    Ash,
    PreloadJs,
    EntityFactory,
    TickProvider,
    SystemPriorities,
    EaselJsRenderSystem,
    AnimationSystem
) {
    var Dumplings = Ash.Class.extend({
        constructor: function() {
            this.engine = new Ash.Engine();
            this.entityFactory = new EntityFactory(this.engine);
            this.tickProvider = new TickProvider();

            this.entityFactory.createDumpling(100, 100, 2, 3);

            this.engine.addSystem(new EaselJsRenderSystem(), SystemPriorities.render);
            this.engine.addSystem(new AnimationSystem(), SystemPriorities.update);

        },
        start: function() {
            this.elapsed = -1;
            this.interval = Math.floor(Math.random() * 3) + 1;

            this.tickProvider.add(this.engine.update, this.engine);
            this.tickProvider.add(this.spawn, this);
            this.tickProvider.start();
        },
        spawn: function(delta) {
            this.elapsed += delta;

            if (this.elapsed >= this.interval || this.elapsed == -1) {
                var numDumplings = Math.floor(Math.random() * 4) + 1;
                var x = 800;
                var y = 600;

                for (var i = 0; i < numDumplings; i++) {
                    var vx = Math.floor(Math.random() * 4) + 2;
                    var vy = Math.floor(Math.random() * 4) + 2;
                    var x = Math.floor(Math.random() * 736);
                    var y = Math.floor(Math.random() * 536);

                    this.entityFactory.createDumpling(x, y, vx, vy);
                }

                this.interval = Math.floor(Math.random() * 3) + 1;
                this.elapsed = 0;
            }
        },
        stop: function() {
            this.tickProvider.stop();
            this.tickProvider.removeAll();

            this.engine.removeAllSystems();
            this.engine.removeAllEntities();
        }
    });

    return Dumplings;
});
