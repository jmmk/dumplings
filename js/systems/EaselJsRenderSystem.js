define([
    'Ash',
    'EaselJs',
    'nodes/RenderNode'
], function(
    Ash,
    EaselJs,
    RenderNode
) {
    var EaselJsRenderSystem = Ash.System.extend({
        constructor: function() {
            var canvas = document.getElementById('dumpling-canvas');
            this.stage = new createjs.Stage(canvas);
        },
        addToEngine: function(engine) {
            this.nodes = engine.getNodeList(RenderNode);
            for (var node = this.nodes.head; node; node = node.next) {
                this.addToDisplay(node);
            }
            this.nodes.nodeAdded.add(this.addToDisplay, this);
        },
        addToDisplay: function(node) {
            this.stage.addChild(node.display.displayObject);
        },
        update: function() {
            for (node = this.nodes.head; node; node = node.next) {
                displayObject = node.display.displayObject;
                displayObject.x = node.position.x;
                displayObject.y = node.position.y;
            }
            this.stage.update();
        }
    });

    return EaselJsRenderSystem;
});
