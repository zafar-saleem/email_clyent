/*global define:false */
define(function (require) {
    
    'use strict';

    var Menu = {
        MenuModel: require('Components/Menu/js/Models/MenuModel'),
        MenuController: require('Components/Menu/js/Controllers/MenuController'),
        MenuItem: require('Components/Menu/js/Views/MenuItems')
    };

    var App = (function () {

        var init = function () {
            var model = new Menu.MenuModel(),
                view = new Menu.MenuItem(),
                controller = new Menu.MenuController();

            view.render();
        };

        return {
            init: init
        };

    }());

    return App;
});

