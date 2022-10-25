import React, {useState} from "react";
import TodoList from "./Components/TodoList";
import TodoFloor from "./Components/TodoFloor";
import TodoForm from "./Components/TodoForm";



function App() {

    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            title: "Learn HTML",
            isCompleted: false,
        },
        {
            id: Math.random(),
            title: "Learn CSS",
            isCompleted: false,
        },
        {
            id: Math.random(),
            title: "Learn JS",
            isCompleted: false,
        }
    ])

    const onChange = (newTodo)=>{
        setTodos(todos.map(todo=>{
            if(newTodo.id === todo.id){
                return newTodo
            }
            return todo
        }))
    }


    const handleDelete = ()=>{
        setTodos(todos.filter(todo=> !todo.isCompleted))

    }

    const onDelete = (todo) => setTodos(todos.filter(t => t.id !== todo.id))

    return (
            <div>
                <TodoForm onAdd={(text) => {
                    setTodos([
                        ...todos,
                        {
                            id: Math.random(),
                            title: text,
                            isCompleted: false,
                        }
                    ])
                }}/>
                <TodoList todos={todos}
                          onDelete={onDelete}
                            onChange={onChange}

                />
                <TodoFloor todos={todos}
                            handelDelete={handleDelete}
                />
            </div>
        );
    }

export default App

