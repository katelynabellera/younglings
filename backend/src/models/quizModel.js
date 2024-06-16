const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    quizId: {
      type: String,
      required: true,
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
            required: true,
        },
    ],
  },
  { timestamps: true }
);

// Add a toJSON method to the schema to control the output of category instances
quizSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Quiz", quizSchema);