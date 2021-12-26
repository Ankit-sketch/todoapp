import { useReducer } from 'react';
import TodoContext from './Todocontext';
import todoReducer from './todo-reducer';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo-types'

const Todostate = (props) => {
    const initialstate = {
        todos: [],
    }
    const [state, dispatch] = useReducer(todoReducer, initialstate);
    //ADD A TODO
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    //TOGGLE A TODO
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID
        })
    }

    //DELETE A TODO
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoID
        })
    }
    return (
        <TodoContext.Provider value={{ todos: state.todos, addTodo, toggleTodo, deleteTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default Todostate;