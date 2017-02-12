angular.module('gdgsite.services', [])

.factory('MeetupFactory', function($http) {

    return {

        getEvents: function(success) {
            return $http.get('https://api.meetup.com/2/events?group_urlname=GDGDuquedeCaxias&status=past,upcoming');
        },

        getRepos: function(success) {
            return $http.get('https://api.github.com/users/gdgduquedecaxias/repos');
        }

    }
})
