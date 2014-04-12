define([
    'Ash',
    'nodes/AnimationNode'
], function(
    Ash,
    AnimationNode
) {
    var AnimationSystem = Ash.System.extend({
        constructor: function() {
        },
        addToEngine: function(engine) {
            this.nodes = engine.getNodeList(AnimationNode);
        },
        update: function() {
            for (var node = this.nodes.head; node; node = node.next) {
                node.position.y -= node.velocity.y;
                node.position.x -= node.velocity.x;

                if (node.position.y + 64 >= 600 || node.position.y <= 0) {
                    node.velocity.y = -node.velocity.y;
                }
                if (node.position.x + 64 >= 800 || node.position.x <= 0) {
                    node.velocity.x = -node.velocity.x;
                }
            }
        }
    });

    return AnimationSystem;
});
