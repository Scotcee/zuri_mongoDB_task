const Todo = require("../model/Todo");


const getAllToDos = async (req, res, next) =>{
    let todos ;
    try { 
        todos = await Todo.find();
    } catch (err) {
        return next(err);
    }

    if(!todos){
        return res.status(500).json({ message: "Internal Server Error"});
    }

    return res.status(200).json({todos});
};  

const addToDo = async (req, res, next) => {
    const {title, description, done } = req.body;
    if(
        !title &&
        title.trim()=="" &&
        !description &&
        description.trim()=="" 
        && !done == ""
        )
    return res.status(422).json({message:"invalid Data"})

let todo ;
try {
    todo = new Todo({
        title,
        description,
        done,
    });
todo = await todo.save();
}catch (err) {
    return next (err);
}
if (!todo) {
    return res.status(500).json({message: "unable to save"});  
}
return res.status(201).json({todo});
};

const updateTodo = async (req, res, next) => {
    const id = req.params.id;
    const { title, description, done } = req.body;
    if(
        !title &&
        title.trim()=="" &&
        !description &&
        description.trim()=="" 
        && !done == ""
        )
    return res.status(422).json({message:"invalid Data"})
    let todo ;
    try {
        todo = await Todo.findByIdAndUpdate(id, { title, description, done });
    }
    catch (err) {
        return next(err)
    }
    if (!todo) {
        return res.status(500).json({ message:"unable to save todo"});
    }
    return res.status(200).json({message:"Todo Updated"});

};

const deleteToDo = async (req, res, next )=> 
{
    const id = req.params.id;
    let todo;
    try{
        todo = await Todo.findByIdAndRemove(id);
    }catch (err){
        return next (err);
    }
    if (!todo) {
        return res.status(500).json({message:"unable to delete"})
    }
    return res.status(200).json ({message:"deleted successfully"})
}
exports.updateTodo = updateTodo;
exports.getAllToDos = getAllToDos; 
exports.addToDo = addToDo;
exports.deleteToDo = deleteToDo;
