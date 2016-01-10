'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'app.version'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider
        .state('view1', {
            url: "/view1",
            views: {
                'header': {
                    templateUrl: "templates/partials/header/header.html"
                },
                /*'navPanel': {
                 templateUrl: "templates/partials/header/navigationPanel.html"
                 },*/
                'content': {
                    templateUrl: "view1/view1.html",
                    controller: 'View1Ctrl as view1Ctrl'
                }
            }

        }).state('view2', {
        url: "/view2",
        views: {
            'header': {
                templateUrl: "templates/partials/header/header.html"
            },
            /*'navPanel': {
             templateUrl: "templates/partials/header/navigationPanel.html"
             },*/
            'content': {
                templateUrl: "view2/view2.html",
                controller: 'View2Ctrl as view2Ctrl'
            }
        }
    });
}]);
