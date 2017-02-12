angular.module('gdgsite.controllers', [])

.controller('GitHubCtrl', function($scope, $http, MeetupFactory) {
    //$scope.json = MeetupFactory.data.getEvents();
    MeetupFactory.getRepos().then(function(res) {
        $scope.repos = res.data;
    }, function(err) {
        if (err.status == 404) {
            console.log('socorro');
        }
    });
})