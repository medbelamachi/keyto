(function () {
    "use strict";

    angular.module('app.prototype', ['ngMockE2E']).run(["$http", "$httpBackend", function ($http, $httpBackend) {

        $httpBackend.whenGET(/\/*\/*\.json/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.js/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.css/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.html/).passThrough();
        $httpBackend.whenGET(/public\/\*/).passThrough();

        var loadJSONSynchronously = function (method, path) {
            var request = new XMLHttpRequest();
            request.open(method, path, false);
            request.send(null);
            return [request.status, request.response, {}];
        };

        var MOCK_VIEW1 = {};

$http.get("view1/data/posts.json").success(function (data) {
    MOCK_VIEW1 = data;
});

$httpBackend.whenGET(/\/posts/).respond(function (method, url, data) {
    return [200, MOCK_VIEW1, {}];
});

    }]);

}());
