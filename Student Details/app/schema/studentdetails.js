var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentDetailsSchema = new Schema({
    // id: String,
    name: String,
    age: Number,
    standard: Number,
    subject: String,
    marks: Number,
    SubjectMarks:[{
    	subject: String,
    	marks: Number,
        result: String,
    }]
});
module.exports = mongoose.model('students', StudentDetailsSchema);




