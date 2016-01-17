'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'angular.filter',
    'app.env',
    'app.prototype',
    'app.version'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                'header': {
                    templateUrl: "templates/partials/header/header.html"
                },
                'leftSideBar': {
                    templateUrl: "templates/partials/sidebar/left_sidebar.html"
                },
                'rightSideBar': {
                    templateUrl: "templates/partials/sidebar/right_sidebar.html"
                }
            }

        }).state('view1', {
        parent: 'app',
        url: "/view1",
        views: {
            'content@': {
                templateUrl: "view1/view1.html",
                controller: 'View1Ctrl as view1Ctrl'
            }
        }

    }).state('view2', {
        parent: 'app',
        url: "/view2",
        views: {
            'content@': {
                templateUrl: "view2/view2.html",
                controller: 'View2Ctrl as view2Ctrl'
            }
        }
    });
}]);
