const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        questionID: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
            required: true,
            enum: ['easy', 'medium', 'hard'],
        },
        question: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            required: true,
            validate: {
                validator: function(arr) {
                  return arr.length >= 2; // Ensure at least two options are provided
                },
                message: 'At least two options are required'
              }
        }, 
        correctAnswerIndex: {
            type: Number,
            required: true,
            validate: {
              validator: function(index) {
                return index >= 0 && index < this.options.length; // Ensure the index is valid
              },
              message: 'correctAnswerIndex must be a valid index in the options array'
            }
          },
    }
)