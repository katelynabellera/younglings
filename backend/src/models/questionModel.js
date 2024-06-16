const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        questionId: {
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
            // Pred-defined allowed values.
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
);

// Add a toJSON method to the schema to control the output of blog instances
questionSchema.method("toJSON", function () {
  const { __v, _id, categoryIds, ...object } = this.toObject();
  object.id = _id;

  object.categories = categoryIds.map((category) => {
    return {
      id: category._id,
      title: category.title,
      description: category.description,
      color: category.color,
    };
  });

  // Ensure author is included in the returned object
  if (this.author) {
    object.author = this.author;
  }

  return object;
});

module.exports = mongoose.model("Question", questionSchema);
