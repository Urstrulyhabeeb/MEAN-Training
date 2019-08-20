var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentMarksSchema = new Schema({
    subject: String,
    marks: Number
    
});
module.exports = mongoose.model('StudentsMarks', StudentMarksSchema);




