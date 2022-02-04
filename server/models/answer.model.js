const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
    {
        question1: {
            type: String,
            required: [true, "Response is required"],
            minlength: [15, "You can give us more than that!"]
        },
        question2: {
            type: String,
            required: [true, "You must answer this question too!"],
            minlength: [15, "You can give us more than that!"]
        },
    }, 
    {timestamps: true}
); 

const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;