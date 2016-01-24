'use strict';

angular.module('app').factory('notificationService', function($rootScope) {
    return {
        subscribe: function(scope, eventName, callback) {
            var handler = $rootScope.$on(eventName , callback);
            scope.$on('$destroy', handler);
        },

        notify: function(eventName) {
            $rootScope.$emit(eventName);
        }
    };
});
