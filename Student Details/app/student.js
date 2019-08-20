 var studentMaster = require('./schema/studentdetails');

exports.createStudent = function(req, res) { 

     var Data = {

        name: req.body.name,
        age: req.body.age,
        standard: req.body.standard,
        subject: req.body.subject,
        marks: req.body.marks,
        SubjectMarks: []  
     };

     console.log(req.body.SubjectMarks)
     if (req.body.SubjectMarks) {
        for (var i = 0; i < req.body.SubjectMarks.length; i++) {
            console.log(i)
            Data.SubjectMarks.push({
                subject: req.body.SubjectMarks[i].subject,
                marks: req.body.SubjectMarks[i].marks,
                result: req.body.SubjectMarks[i].result
            })
        }
    }

    console.log('test')
    
    studentMaster.create(Data, function(error, detail) {
        console.log(error)
        console.log(detail)
            if (error) {
                res.send({ error: error });

            } else {
                res.send({ student : detail });

            }

    });

}



// ---------------------------------------------------------------------------------------------
exports.search = function(req, res) {
    console.log('search')
    var query = studentMaster.find();

   
    if (!!req.body.stusearchDetails) {
        console.log("inside")
        query.where('$or').equals([
            { name: { '$regex': new RegExp(req.body.stusearchDetails, 'i') } },
            { subject: { '$regex': new RegExp(req.body.stusearchDetails, 'i') } }            
        ]);
    }
    console.log(JSON.stringify(query._conditions));
    query.exec(function(errs, detail) {
        if (errs) {
            res.send({ error: errs });
            console.log('no records found')
        } else {
            res.send(detail);
        }
    });
}

//-----------------------------------------------------------------------------------------------
exports.updateStudent = function(req, res) {

    studentMaster.findById({ "_id": req.body._id }, function(err, data) {
        if (err) {
            res.send({ error: err });
        } else {
            data.name = req.body.name;
            data.age = req.body.age;
            data.standard = req.body.standard;
            data.subject =  req.body.subject;
            data.marks = req.body.marks;
            data.SubjectMarks=req.body.SubjectMarks;
            data.save(function(error, savedata) {
                if (error) {
                    res.send(error);
                } else {
                    res.send({ student: savedata });

                }
            })

        }
    });
};
//---------------------------------------------------------------------------------------
exports.removeStudent = function(req, res) {
    console.log('remove');

    studentMaster.remove({
            "_id": req.params.id
        },

        function(err, deletedDetail) {
            console.log(err);
            if (err) {
                res.send(err);
            } else {

                res.send(deletedDetail);

            }
        })
};
// --------------------------------------------------------------------------
exports.studentDetail = function(req, res) {
    console.log(req.params.id);

    studentMaster.findById({ "_id": req.params.id }, function(err, data) {
        if (err) {
            res.send({ error: err });
        } else {
            res.send({ student: data });
            console.log(data);

        }
    });
};


// ----------------------------------------------------------------------------------------------

// exports.addMarks = function(req, res) {

//     studentMaster.create({

//             name: req.body.name,
//             age: req.body.age,
//             standard: req.body.standard,
//             subject: req.body.subject,
//             marks: req.body.marks,
//             SubjectMarks=req.body.SubjectMarks

            

//         },
         
//         function(error, detail) {
//         console.log(error)
//         console.log(detail)
//             if (error) {
//                 res.send({ error: error });

//             } else {
//                 res.send({ data: detail });

//             }
//         });
// }