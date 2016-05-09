define(function (require) {
    
    'use strict';

    var _ = require('underscore');
    var EmailsList = require('text!../../templates/List.html');

    var EmailsListView = function () {};

    EmailsListView.prototype = (function () {

        var EmailsListTemplate = _.template(EmailsList);

        var render = function () {
            $('.emails-list').html(EmailsListTemplate());            
        };

        return {
            render: render
        }
    })();

    return EmailsListView;
});
