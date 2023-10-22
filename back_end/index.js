import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import TodoModel from './model/model.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000;


//ModdleWare


//Db config
mongoose
    .connect('mongodb://127.0.0.1:27017')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening PORT number ${PORT}...`)
        })
    })
    .catch((error) => console.log(error))


app.get('/todos', async (req,res) => {
    try {
        const allTodos = await TodoModel.find({}).sort({createdAt: -1})
        res.status(200).send(allTodos)

    } catch (error){
        res.status(400).send(error.message);
    }
})

//create new todo
app.post('/todos', async (req,res) => {
    const dbTodo = req.body;
    try {
        const newTodo = await TodoModel.create(dbTodo)
        res.status(200).send(newTodo)

    } catch (error){
        res.status(500).send(error.message);
    }
}
)

//update todo
app.put('/todos/:id',async (req,res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`There is todo with the id of ${id}`)
        }
        const todoID = {_id: id}
        const update = {completed:true}
        const updateTodo = await TodoModel.findOneAndUpdate(todoID, update)
        if(!updateTodo){
            return res.status(404).send(`There is todo with the idof ${id}`)
        }
        res.status(200).send(updateTodo)

    } catch (error){
        res.status(500).send(error.message);
    }
}
)
//delte

app.delete('/todos/:id', async (req,res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`There is todo with the id of ${id}`)
        }
        const deleteTodo = await TodoModel.deleteOne({_id: id})
        res.status(200).send(deleteTodo)

    } catch (error){
        res.status(500).send(error.message);
    }
}
)







//API 
