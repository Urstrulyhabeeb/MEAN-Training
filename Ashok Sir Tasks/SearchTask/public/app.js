var app = angular.module('myApp', ["ui.router"]);
app.config(function($stateProvider) {
    $stateProvider
        .state('Search', {
            url: '/Details/Search',
            templateUrl: '/Details/Search.html'
            //controller: 'SearchController',
          //  params: { studentid: null }
        })

        $stateProvider
        .state('empty', {
            url: '/Details/empty',
            templateUrl: '/Details/empty.html'
            //controller: 'SearchController',
          //  params: { studentid: null }
        })
});


app.controller('appController', function($scope, $state, $timeout) {
    $scope.goTo = function() {
        $state.go('Search');
    }

    $scope.goEmpty = function() {
        $state.go('empty');
    }
    
})