'use strict';

angular.module('app').controller('View1Ctrl', ['$filter', '$http', 'EnvironmentConfig', function ($filter, $http, EnvironmentConfig) {

    $http.get('http://jsonplaceholder.typicode.com/posts').success(function(data) {
        console.log("posts result : ",data) ;
    });

}]);