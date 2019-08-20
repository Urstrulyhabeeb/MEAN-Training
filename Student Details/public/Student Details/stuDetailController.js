// import { states } from "mongoose";

	app.controller('stuDetailController', function($scope, $state, $http, $stateParams)
	 {  

    var studentuid = $stateParams.studentuid;
    console.log(studentuid);
   

$scope.search = function() { 
    console.log('search')
    $http.post('/search', $scope.studetails).
    then(function successCallback(response) {  
        $scope.studentdata = response.data;      
        console.log($scope.studentdata);
    }, function errorCallback(errresponse) {
        var data = errresponse.data;
        console.log('Error', data);
    });
}

 $scope.search();
 $scope.clear = clear;
    function clear() {
        console.log('clear');
        $scope.stuDetail = {
            stusearchDetails: ''
        }
        $scope.studentdata = [];
    }
// ------------------------------------------------------------------------------------------------

$scope.remove = function(EmployeeeId) {

    if (confirm("Delete Student Info") == true) {
        $http.get('removeStudent/' + EmployeeeId).
        then(function successCallback(response) {
            $scope.search();
        }, function errorCallback(errresponse) {
            var data = errresponse.data;
            console.log('Error' + data);

        });
    } else {
        console.log("Delete Cancelled");
    }
}

// -------------------------------------------------------------------------------------------------------

$scope.modify = function(studentid) {
    console.log("mod")
console.log(studentid);
    $state.go('Details', { studentuid: studentid });
   

}



// ------------------------------------------------------------------------------------------
$scope.addMarks = function(studentid) {
        console.log("in")
    $state.go('Details', { studentuid: studentid });
   
    
}
// //---------------------------------------------------------------------------------------------
$scope.showdetails = function(studentid) {
    console.log("in")
$state.go('UI', { studentuid: studentid });
}
//-----------------------------------------------------------------------------------------------------
	}); 
