requirejs.config({
    baseUrl: 'js',
    paths: {
        Ash: '../bower_components/ash-js/build/ash.min',
        EaselJs: '../bower_components/easeljs/lib/easeljs-0.7.1.min',
        PreloadJs: '../bower_components/createjs-preloadjs/lib/preloadjs-0.4.1.min'
    }
});

requirejs([
    'Dumplings'
], function(
    Dumplings
) {
    var dumplings = new Dumplings();
    dumplings.start();
    start = Date.now() / 1000;
    // setTimeout(function() {
    //         dumplings.stop();
    // }, 500);
});
