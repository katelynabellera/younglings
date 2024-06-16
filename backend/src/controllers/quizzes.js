const Quiz = require("../models/quizModel");

const createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz({
      title: req.body.title,
      description: req.body.description,
      color: req.body.color,
    });
    const newQuiz = await quiz.save();
    const quizRes = await Quiz.findById(newQuiz._id);
    res
      .status(201)
      .json({ message: "New quiz created!", data: quizRes });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res
      .status(200)
      .json({ message: "Return all quizzes!", data: quizzes });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getQuizById = async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Get quiz by ID!",
    data: [],
  });
};

const updateQuizByID = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (quiz) {
      quiz.title = req.body.title || quiz.title;
      quiz.description = req.body.description || quiz.description;
      quiz.color = req.body.color || quiz.color;
      const updatedquiz = await quiz.save();
      res
        .status(200)
        .json({ message: "Quiz updated!", data: updatedQuiz });
    } else {
      res.status(404).json({ message: "Quiz not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const deleteQuizByID = async (req, res) => {
  try {
    const quizDB = await Quiz.findById(req.params.id);
    if (!quizDB) {
      res
        .status(400)
        .json({ message: "Cannot delete quiz with existing blogs!" });
    }
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (quiz) {
      res.status(200).json({ message: "Quiz deleted!", id: req.params.id });
    } else {
      res.status(404).json({ message: "Quiz not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const quizController = {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuizByID,
  deleteQuizByID,
};

module.exports = quizController;