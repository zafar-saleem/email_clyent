/*global require:false */
require.config({
    paths: {
	'jquery': 'libs/jquery/dist/jquery',
        'underscore': 'libs/underscore/underscore',
        'text': 'plugins/text'
    }
});

require(['app'], function (App) {
    console.log(App);
    App.init();
});
