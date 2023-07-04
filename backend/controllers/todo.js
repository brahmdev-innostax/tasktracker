const { validationResult } = require("express-validator");
const cloudinary = require("cloudinary");
const Todo = require("../models/todo");

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ status: "SUCCESS", todos });
  } catch (error) {
    console.log(error);
    const err = new Error("Could not get TODOs");
    err.httpStatusCode = 500;
    next(err);
  }
};

exports.getSingleTodo = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ status: "ERROR", errors: errors.array()[0] });
    }

    const todo = await Todo.findById(req.params.todoId);

    if (!todo) {
      return res
        .status(404)
        .json({ status: "ERROR", message: "Todo not found!" });
    }

    res.status(200).json({ status: "SUCCESS", todo });
  } catch (error) {
    console.log(error);
    const err = new Error("Could not get TODO");
    err.httpStatusCode = 500;
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ status: "ERROR", errors: errors.array()[0].msg });
    }

    const { title, subtitle, content } = req.body;

    const todo = new Todo({
      title,
      subtitle,
      content,
    });

    await todo.save();
    res
      .status(200)
      .json({ status: "SUCCESS", message: "Todo is Created Successfully!" });
  } catch (error) {
    console.log(error);
    const err = new Error("Could not create TODO");
    err.httpStatusCode = 500;
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "No todo to update!" });
    }

    const { title, subtitle, content } = req.body;

    todo.title = title;
    todo.subtitle = subtitle;
    todo.content = content;
    await todo.save();
    res
      .status(200)
      .json({ status: "SUCCESS", message: "Todo Updated Successfully!" });
  } catch (error) {
    console.log(error);
    const err = new Error("Could not Update Todo");
    err.httpStatusCode = 500;
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findByIdAndRemove(todoId);

    if (!todo) {
      return res
        .status(404)
        .json({ status: "ERROR", message: "Todo not Found!" });
    }
    res.status(200).json({ status: "SUCCESS", message: "Deleted Todo", todo });
  } catch (error) {
    const err = new Error("Could not Delete Todo");
  }
};
