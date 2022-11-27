import React, { useState } from 'react'

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [taskInput, setTaskInput] = useState('')
    const [updateTaskInput, setUpdateTaskInput] = useState()
    
    const handleSubmit = () => {
        if(taskInput == '') return;

        const newTodo = {
            id: new Date().getTime(),
            task: taskInput,
            updateFlag: false
        }
        setTodoList([...todoList, newTodo]);
        setTaskInput('')
    }

    function handleUpdate(id) {
        if(updateTaskInput == '') return;
        
        const todo = todoList.find(todo => todo.id === id)
        const updatedList = todoList.filter(todo =>  todo.id !== id)
        if(todo.updateFlag == false) {
            updatedList.push({...todo, updateFlag: true})
            setTodoList(updatedList)
            return;
        }
        updatedList.push({...todo, 
            task: updateTaskInput,
            updateFlag: false
        })
        setTodoList(updatedList);
        setUpdateTaskInput('')
    }

    function handleDelete(id) {
        setTodoList(todoList.filter(todo =>  todo.id !== id));
    }

  return (
    <div>
        <div>
            <input type='text' placeholder="Name your task" value={taskInput}
                    onChange={(e) => { setTaskInput(e.target.value) }}/>
            <button onClick={handleSubmit} >Add item</button>
        </div>
        <div>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        {/* {todo.task} */}
                        {todo.updateFlag == true
                            ? <input type='text' defaultValue={todo.task} 
                                    onChange={(e) => { setUpdateTaskInput(e.target.value) }}/>
                            : todo.task
                        }
                        <button onClick={() => {handleUpdate(todo.id)}}>Update</button>
                        <button onClick={() => {handleDelete(todo.id)}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList