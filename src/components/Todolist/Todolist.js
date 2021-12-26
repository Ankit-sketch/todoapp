import React, { useContext } from 'react'
import classes from './Todolist.module.css'
import Todocontext from '../../context/Todocontext'
import Todoitem from './Todoitem/Todoitem';
const Todolist = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(Todocontext)
    return (
        <div className={classes.todoList}>
            <h3 className={classes.todoList__title}>TO-DOS</h3>
            <div className={classes.todoList__todos}>
                {
                    todos.map((todo) => (
                        <Todoitem key={todo.id} text={todo.text} complete={todo.complete}
                            clickToToggle={() => { toggleTodo(todo.id) }}
                            clickToDelete={() => { deleteTodo(todo.id) }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Todolist
