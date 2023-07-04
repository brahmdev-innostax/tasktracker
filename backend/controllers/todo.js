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
    const todo = await Todo.findById(req.params.todoId);

    if (!todo) {
      return res
        .status(404)
        .json({ status: "ERROR", message: "Todo not found!" });
    }

    res.status(200).json({ status: "SUCCESS", todo });
  } catch (error) {
    console.log(error);
    const err = new Error("Could not get TODOs");
    err.httpStatusCode = 500;
    next(err);
  }
};
