var app = angular.module('myApp', ["ui.router"]);
app.config(function($stateProvider) {
    $stateProvider
        .state('stuDetail', {
            url: '/Student Details/stuDetail',
            templateUrl: '/Student Details/stuDetail.html',
            controller: 'stuDetailController',
          //  params: { studentid: null }
        })
        
        .state('Details', {
            url: '/Student Details/Details',
            templateUrl: '/Student Details/Details.html',
            controller: 'marksController',
            params: { studentuid: null }
           
        })

        .state('UI', {
            url: '/Student Details/UI',
            templateUrl: '/Student Details/UI.html',
            controller: 'stuDetailController',
            //  params: { studentuid: null }
           
        })


});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    }]);

app.controller('appController', function($scope, $state, $timeout) {
    $scope.goToStudentDetails = function() {
        $state.go('stuDetail');
    }
    $scope.goToStudentMarks = function() {
        $state.go('stuMarks');
    }
})