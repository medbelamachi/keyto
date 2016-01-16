var MOCK_VIEW1 = {};

$http.get("view1/data/posts.json").success(function (data) {
    MOCK_VIEW1 = data;
});

$httpBackend.whenGET(/\/posts/).respond(function (method, url, data) {
    return [200, MOCK_VIEW1, {}];
});