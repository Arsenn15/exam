import React from "react";



function TodoFloor({todos ,handelDelete}) {
    return (
        <div>
            <label>
                <span>{todos.filter(todo=>todo.isCompleted).length}/{todos.length}</span>
                <button onClick={handelDelete}>Clear</button>
            </label>
        </div>
    );
}

export default TodoFloor;
