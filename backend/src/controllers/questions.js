const Question = require("../models/questionModel");

const createQuestion = async (req, res) => {
    try {
      const question = new Question({
            questionId: req.body.questionId,
            category: req.body.category,
            difficulty: req.body.difficulty,
            question: req.body.question,
            options: req.body.options,
            correctAnswerIndex: req.body.correctAnswerIndex,
      });
      const newQuestion = await question.save();
      res.status(201).json({ message: "New question created!", data: newQuestion });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const getQuestions = async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json({ message: "Return all questions!", data: questions });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const getQuestion = async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (question) {
        res.status(200).json({ message: "Return Question by ID!", data: question });
      } else {
        res.status(404).json({ message: "Question not found!", data: [] });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const updateQuestion = async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (question) {
        question.questionId = req.body.questionId || question.questionId;
        question.category = req.body.category || question.category  ;
        question.difficulty = req.body.difficulty || question.difficulty;
        question.question = req.body.question || question.question;
        question.options = req.body.options || question.options;
        question.correctAnswerIndex = req.body.correctAnswerIndex || question.correctAnswerIndex;
        const updatedquestion = await question.save();
        res.status(200).json({ message: "Question updated!", data: updatedquestion });
      } else {
        res.status(404).json({ message: "Question not found!", data: [] });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const deleteQuestion = async (req, res) => {
    try {
      const question = await Question.findByIdAndDelete(req.params.id);
      if (question) {
        return res.status(200).json({ message: "Question deleted!" });
      } else {
        return res.status(404).json({ message: "Question not found!" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    getQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion,
  };