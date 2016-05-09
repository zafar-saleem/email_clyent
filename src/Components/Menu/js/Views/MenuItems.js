define(function (require) {
    
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        MenuTemplate = require('text!../../templates/Menu.html');
    
    var MenuItems = function (model, $elements) {
        this._model = model;
        this.$elements = $elements;
    };
    
    MenuItems.prototype = (function () {

        var template = _.template(MenuTemplate);

        var render = function () {
            $('.email-menu').html(template());
        };

        return {
            render: render
        }
    })();

    return MenuItems;
});

