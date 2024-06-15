// Basic Structure - app.METHOD(PATH, HANDLER);

const express = require("express");
const router = express.Router();


// CRUD operations

// CREATE
    router.post("/", (req, res) => {
        createQuestion(req, res);
    });

//READ
    // GET ALL
    router.get("/", (req, res) => {
        getQuestions(req, res);
    });

    // GET BY ID
    router.get("/:id", (req, res) => {
        getQuestion(req, res);
    });

// UPDATE
    router.put("/:id", (req, res) => {
        updateQuestion(req, res);
    });

// DELETE
    router.delete("/:id", (req, res) => {
        deleteQuestion(req, res);
    });

module.exports = router;