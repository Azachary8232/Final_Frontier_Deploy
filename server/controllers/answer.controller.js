const Answer = require("../models/answer.model");


        // ******Create******

module.exports.createNewAnswer = (req, res) => {
        Answer.create(req.body)
                .then(newlyCreatedAnswer => res.json({ answer: newlyCreatedAnswer }))
                .catch(err => res.status(400).json(err));
        };


        // ******Retrieve******

module.exports.findAllAnswers = (req, res) => {
        Answer.find()
                .then(allAnswers => res.json({ answers: allAnswers }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
};
        

                

                // ******Update******
        
        

                // ******Delete******
        
module.exports.deleteAnExistingAnswer = (req, res) => {
        Answer.deleteOne({ _id: req.params.id })
                .then(result => res.json({ result: result }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
};

