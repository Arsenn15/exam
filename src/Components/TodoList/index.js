import React from "react";
import TodoItem from "../TodoItem";



function TodoList({todos , onChange , onDelete }) {
    return (
        <div>
            {
                todos.map(todo=>{
                    return <div key={todo.id}><TodoItem todo={todo}
                                                        onChange={onChange}
                                                        onDelete={onDelete}

                    /> </div>
                })
            }
        </div>
    );
}

export default TodoList;
