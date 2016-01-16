(function () {
    "use strict";

    angular.module('app.prototype', ['ngMockE2E']).run(["$http", "$httpBackend", function ($http, $httpBackend) {

        $httpBackend.whenGET(/\/*\/*\.json/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.js/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.css/).passThrough();
        $httpBackend.whenGET(/\/*\/*\.html/).passThrough();
        $httpBackend.whenGET(/style\/img\/content/).passThrough();

        var loadJSONSynchronously = function (method, path) {
            var request = new XMLHttpRequest();
            request.open(method, path, false);
            request.send(null);
            return [request.status, request.response, {}];
        };

        --content--

    }]);

}());
