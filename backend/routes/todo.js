const router = require("express").Router();

const todoController = require("../controllers/todo");

router.get("/");

router.get("/:todo");

router.post("/");

module.exports = router;
