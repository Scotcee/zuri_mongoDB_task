const express = require("express");
const { getAllToDos, addToDo, updateTodo, deleteToDo } = require("../controller/todo-controller")
const router = express.Router();

router.get("/",getAllToDos);
router.post("/",addToDo);
router.put("/:id",updateTodo);
router.delete("/:id", deleteToDo);


module.exports = router;