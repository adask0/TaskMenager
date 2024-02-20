import { useState } from "react"

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if(enteredTask.trim() !== ''){
        onAdd(enteredTask);
        setEnteredTask('');
        }
    }

    function handleKeyPress(event){
        if(event.key === 'Enter' && enteredTask.trim() !== ''){
            onAdd(enteredTask)
            setEnteredTask('');
        }
    }

    return(
        <div className="flex items-center gap-4">
            <input type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
                maxLength={30}
                onKeyPress={handleKeyPress}
            />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}