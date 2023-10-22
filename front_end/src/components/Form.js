import React from 'react'

const Form = ({ input, setInput, addTodo }) => {
    return (
        <form>
            <input
                className='input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                placeholder='Enter your task here..'
                required>

            </input>
            <button
                className='button'
                type='submit'
                onClick={(e)=> addTodo(e)}

            >ADD</button>
        </form>
    )
}
export default Form;