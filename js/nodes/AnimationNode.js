define([
    'Ash',
    'components/Position',
    'components/Velocity'
], function (
    Ash,
    Position,
    Velocity
) {
    var AnimationNode = Ash.Node.create({
        position: Position,
        velocity: Velocity
    });

    return AnimationNode;
});
