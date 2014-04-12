// Constants for systems prioritites
define(function () {
    var SystemPriorities = {
        preUpdate: 1,
        update: 2,
        move: 3,
        resolveCollisions: 4,
        animate: 5,
        render: 6
    };

    return SystemPriorities;
});
