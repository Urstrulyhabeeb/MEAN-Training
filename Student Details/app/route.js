
module.exports = function(app) {

    var student = require('./student');
    app.post('/createStudent', student.createStudent);
    // app.post('/addMarks', student.addMarks); 
    // app.get('/getStudent', student.getStudent);
     app.post('/search', student.search);
    app.get('/removeStudent/:id', student.removeStudent);
    app.post('/updateStudent',student.updateStudent);
   app.get('/studentDetail/:id',student.studentDetail)
}; 