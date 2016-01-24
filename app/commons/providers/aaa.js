'use strict';

angular.module('app').provider('$aaa', function () {
    //reference to provider context
    var self = this;

    //$aaa service factory function
    self.$get = function ($rootScope, $state) {
        var $auth = {};
        $auth.signin = function (user) {
            return {};
        };

        $auth.signout = function () {
            return {};
        };

        $auth.isAuthenticated = function () {
            return true;
        };

        $auth._onStateChange = function (event, toState, toParams, fromState, fromParams) {
            $state
                .go(
                    toState.name,
                    toParams, {
                        notify: false
                    })
                .then(function () {
                    $rootScope
                        .$broadcast(
                            '$stateChangeSuccess',
                            toState,
                            toParams,
                            fromState,
                            fromParams
                        );
                });
        }
        return $auth;
    };

});