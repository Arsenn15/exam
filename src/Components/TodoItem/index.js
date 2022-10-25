import React from "react";



function TodoItem({todo,onDelete,onChange,changeTitle}) {
    return (
        <div>
            <input type="checkbox" onChange={(e)=>{
            onChange({
                ...todo,
                isCompleted: e.target.checked
            })
            }}/>
            {todo.title}
            <button onClick={()=>onDelete(todo)}>X</button>

        </div>
    );
}

export default TodoItem;
