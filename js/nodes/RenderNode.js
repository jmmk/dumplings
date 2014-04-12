define([
    'Ash',
    'components/Position',
    'components/Display'
], function (
    Ash,
    Position,
    Display
) {
    var RenderNode = Ash.Node.create({
        position: Position,
        display: Display
    });

    return RenderNode;
});
