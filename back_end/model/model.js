import mongoose  from "mongoose";


const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const TodoModel = mongoose.model('todos', todoSchema)

export default TodoModel;
