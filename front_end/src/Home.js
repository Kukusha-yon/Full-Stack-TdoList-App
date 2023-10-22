import React, { useEffect, useState } from 'react'
import Form from './components/Form';
import Todolist from './components/Todolist';
import axios from './axios'
const Home = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    
    const fetchData = async () => {
        try {
            const response = await axios.get('/todos')
            setTodos(response.data);
        } catch (err) {
            console.log(err.message)
        }
    }
    // console.log(todos, 'todos')
   useEffect(() => {
    fetchData()

   },[])
   const addTodo =async(e) => {
    e.preventDefault();
    if(input.length === 0) return null;
    await axios.post('/todos', [{
        ...todos,
        text: input,
        completed: false,
    }])
    fetchData();
    setInput('')

   }
 
    return (
        <div className='home'>
            <h1>Todo List</h1>
            <Form input={input} setInput={setInput} addTodo={addTodo} />
            <Todolist todos={todos} fetchData={fetchData}/>
        </div>
    )

}

export default Home;