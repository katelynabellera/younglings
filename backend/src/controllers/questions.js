const createQuestion = (req, res) => {
    res.status(200).json({ message: "Create new Question!", data: [] });
  };
  
  const getQuestions = (req, res) => {
    res.status(200).json({ message: "Return all Questions!", data: [] });
  };
  
  const getQuestion = (req, res) => {
    res.status(200).json({ message: "Return Question by ID!", data: [] });
  };
  
  const updateQuestion = (req, res) => {
    res.status(200).json({ message: "Update Question by ID!", data: [] });
  };
  
  const deleteQuestion = (req, res) => {
    res.status(200).json({ message: "Delete Question by ID!", data: [] });
  };
  
  module.exports = {
    getQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion,
  };