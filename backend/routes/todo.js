const router = require("express").Router();
const { body } = require("express-validator");

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
  todoController.updateTodo
);

module.exports = router;
