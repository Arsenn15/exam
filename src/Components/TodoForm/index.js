import React, {useState} from "react";



function TodoForm({onAdd}) {
    const [text,setText] = useState("")
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                onAdd(text);
                setText("")
            }}>
                <input type="text" value={text} onChange={(e)=>{
                    setText(e.target.value)
                }}/>
                <button >ADD</button>
            </form>
        </div>
    );
}

export default TodoForm;
