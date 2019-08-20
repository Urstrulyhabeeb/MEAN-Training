// //  import { states } from "mongoose";
app.controller('marksController', function($scope, $state, $http, $stateParams) {

    console.log('this is marksController');
    $scope.SubjectMarks = [];

    var studentuid = $stateParams.studentuid;
    console.log(studentuid);

    $scope.subject = ["Telugu", "Urdu", "Hindi", "English", "Tamizh"];

    $scope.newItem = function() {
        console.log("inside newitem");
        $scope.studentdata.SubjectMarks.push({
            subject: '',
            marks: '',
            result: ''

        });
    }

    $scope.delete = function(index) {
        console.log("inside delete");
        $scope.studentdata.SubjectMarks.splice(index, 1)
    }

    $scope.result = function(index) {
        var a;
        var b = "pass";
        var c = "fail";
        a = Number($scope.studentdata.SubjectMarks[index].marks);

        if ((a >= 35) && (a <= 100)) {
            $scope.studentdata.SubjectMarks[index].result = b;
        } else if (a > 100) {
            alert("enter valid marks");
        } else {
            $scope.studentdata.SubjectMarks[index].result = c;
        }
    };


    if (studentuid != null) {
        $http.get('/studentDetail/' + studentuid).
        then(function successCallback(response) {
            var data = response.data;

            $scope.studentdata = data.student;
            console.log('student', student)

        })
    } else {
        $scope.studentdata = {};
        $scope.studentdata.SubjectMarks = [];
        if (!$scope.studentdata.SubjectMarks || $scope.studentdata.SubjectMarks.length == 0) {
            $scope.newItem();
        }
    }



    $scope.addStudent = function() {

        var postURL = '/createStudent';
        if (!!studentuid) {

            postURL = '/updateStudent';
        }
        // console.log($scope.name)
        // console.log($scope.age)
        // console.log($scope.standard)
        // console.log($scope.subject)
        //  console.log($scope.marks)

        // var studentdata = {};
        // studentdata.name = $scope.Sname;
        // studentdata.age = $scope.Sage;
        // studentdata.standard = $scope.Sstandard;
        // studentdata.subject = $scope.Ssubject;
        // studentdata.marks = $scope.Smarks
        // studentdata._id = studentuid;
        // console.log(studentdata);
        // $scope.studentarr.push(student);
        // $scope.student.push(student);

        $http.post(postURL, $scope.studentdata).
        then(function successCallback(response) {
                console.log("inside create/update")
                var data = response.data;
                $scope.studentdata = data.student;
                $scope.studentdata = {};
                $state.go('UI')

            }),
            function errorCallback(errresponse) {
                var data = errresponse.data;
                console.log('Error', +data);


            };
    }
    $scope.cancel = function() {
        $state.go("UI");
    }

    //     $scope.submitMarks = function() {

    //     console.log($scope.Sname)
    //     console.log($scope.Sage)
    //     console.log($scope.Sstandard)
    //     console.log($scope.Ssubject)
    //     console.log($scope.Smarks)

    //     var studentdataa = {};
    //     studentdataa.name = $scope.Sname;
    //     studentdataa.age = $scope.Sage;
    //     studentdataa.standard = $scope.Sstandard;
    //     studentdataa.subject = $scope.Ssubject;
    //     studentdataa.marks = $scope.Smarks
    //     console.log(studentdataa);

    //             $http.post( '/addMarks', studentdataa).
    //             then(function successCallback(response) {
    //                     var data = response.data;
    //                     $scope.studentdataa = data;
    //                     $scope.studentdataa = {};
    //                     $state.go('marks')

    //                 }),
    //                 function errorCallback(errresponse) {
    //                     var data = errresponse.data;
    //                     console.log('Error', +data);


    //                 };
    //         }

});