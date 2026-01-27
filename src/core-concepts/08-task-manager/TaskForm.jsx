import { useState } from "react";

export default function TaskForm({addTask}) {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(value.trim()){
            console.log("Form Submitted", value)
            addTask(value);
            setValue("")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="add-task-action">
                <input
                type="text"
                placeholder="Add a Task"
                className="add-task-input"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
                <button className="add-task-button" type="submit">Add</button>
            </div>
        </form>
        </>
    )
};
