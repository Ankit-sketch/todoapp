import { useState, useContext } from "react";
import Todocontext from "../context/Todocontext";
import classes from './TodoInput.module.css'

const TodoInput = () => {
    const { addTodo } = useContext(Todocontext);
    const [todoval, setTodoval] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            text: todoval,
            complete: false,
        };
        addTodo(newTodo);
        setTodoval('');
    }
    return (
        <div className={classes.todoInput}>
            <h3 className={classes.todoInput__title}>
                useCONTEXT + useREDUCER TO-DO LIST
            </h3>
            <form onSubmit={handleSubmit} className={classes.todoInput__form}>
                <input
                    className={classes.todoInput__input}
                    type="text"
                    value={todoval}
                    placeholder="Enter a Todo..."
                    onChange={(e) => setTodoval(e.target.value)}
                />
                <button className={classes.todoInput__submitBtn}>ADD</button>
            </form>
        </div>
    )
}

export default TodoInput