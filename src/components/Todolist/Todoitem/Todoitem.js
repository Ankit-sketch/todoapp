import React from 'react';
import classes from './Todoitem.module.css';
const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
    return (
        <div className={classes.todoItem}>
            <span className={classes.todoItem__text}  style={{ color: complete ? "green" : "red" }}>
                {text}
            </span>
            <div>
                <button className={classes.todoItem__toggleBtn}  onClick={clickToToggle}>
                    TOGGLE  
                </button>
                <button className={classes.todoItem__deleteBtn} onClick={clickToDelete}>
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default TodoItem;