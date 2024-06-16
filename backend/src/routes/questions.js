// Basic Structure - app.METHOD(PATH, HANDLER);

const express = require("express");
const router = express.Router();

const questionController = require("../controllers/questions");

// CRUD operations

// CREATE
    router.post("/", (req, res) => {
        questionController.createQuestion(req, res);
    });

//READ
    // GET ALL
    router.get("/", (req, res) => {
        questionController.getQuestions(req, res);
    });

    // GET BY ID
    router.get("/:id", (req, res) => {
        questionController.getQuestion(req, res);
    });

// UPDATE
    router.put("/:id", (req, res) => {
        questionController.updateQuestion(req, res);
    });

// DELETE
    router.delete("/:id", (req, res) => {
        questionController.deleteQuestion(req, res);
    });

module.exports = router;