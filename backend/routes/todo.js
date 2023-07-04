const router = require("express").Router();
const { body, param } = require("express-validator");

const todoController = require("../controllers/todo");

router.get("/", todoController.getAllTodos);

router.get("/:todoId", todoController.getSingleTodo);

router.post(
  "/",
  [
    body("title", "Please enter a valid title")
      .trim()
      .notEmpty()
      .isLength({ min: 5 })
      .withMessage("Invalid Title"),
    body("subtitle", "Please enter a valid Subtitle")
      .trim()
      .notEmpty()
      .isLength({ min: 5 }),
    body("content", "Please enter a valid Content")
      .trim()
      .notEmpty()
      .isLength({ min: 5 }),
  ],
  todoController.createTodo
);

router.patch(
  "/:todoId",
  [
    param("todoId", "Invalid TodoId").trim().isLength({ min: 5 }),
    body("title", "Please enter a valid title")
      .trim()
      .notEmpty()
      .isLength({ min: 5 }),
    body("subtitle", "Please enter a valid Subtitle")
      .trim()
      .notEmpty()
      .isLength({ min: 5 }),
    body("content", "Please enter a valid Content")
      .trim()
      .notEmpty()
      .isLength({ min: 5 }),
  ],
  todoController.updateTodo
);
router.delete("/:todoId", todoController.deleteTodo);

module.exports = router;
