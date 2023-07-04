const router = require("express").Router();

const todoController = require("../controllers/todo");

router.get("/", todoController.getAllTodos);

router.get("/:todoId", todoController.getSingleTodo);

router.post("/");

module.exports = router;
