import React from 'react'
import axios from '../axios'

const Todolist = ({ todos, fetchData }) => {

    const updateTodo = async (id) => {
        console.log(todos, 'hi')
        try {

            const response = await axios.put(`/todos/${id}`, {
                id,
            })
            fetchData();
            return response.data.json
        } catch (error) {
            console.error(error.message)
        }

    }

    const deleteTodo = async (id) => {
       
        try {

            const response = await axios.delete(`/todos/${id}`, id)
            fetchData();
            return response.data.json
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <div>
            <ul>
                <li>

                    {todos?.map((todo) => {
                        return (

                            <div key={todo._id} className='map'>
                                <span
                                    onClick={(id) => updateTodo(todo._id)}
                                    isCompleted={todo.completed}
                                >
                                    {todo.text}
                                </span>
                                <button  onClick={(id) => deleteTodo(todo._id)} className='delete'>X</button>
                            </div>
                        )
                    }
                    )}


                </li>
            </ul>
        </div>
    )
}
export default Todolist;