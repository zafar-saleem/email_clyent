/*global define:false */
define(function (require) {
    
    'use strict';

    var Menu = {
        MenuModel: require('Components/Menu/js/Models/MenuModel'),
        MenuController: require('Components/Menu/js/Controllers/MenuController'),
        MenuItem: require('Components/Menu/js/Views/MenuItems')
    },

    List = {
        ListModel: require('Components/EmailsList/js/Models/EmailsListModel'),
        ListController: require('Components/EmailsList/js/Controllers/EmailsListController'),
        ListView: require('Components/EmailsList/js/Views/EmailsListView')
    };

    var App = (function () {

        var init = function () {
            var menuModel = new Menu.MenuModel(),
                menuView = new Menu.MenuItem(menuModel, {}),
                menuController = new Menu.MenuController(menuModel, menuView);

            var listModel = new List.ListModel(),
                listView = new List.ListView(listModel, {}),
                listController = new List.ListController(listModel, listView);

            menuView.render();
            listView.render();
        };

        return {
            init: init
        };

    }());

    return App;
});

