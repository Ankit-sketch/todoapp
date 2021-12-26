import Todostate from './context/Todostate';
import TodoInput from './components/TodoInput';
import TodoList from './components/Todolist/Todolist';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__todoApp">
        <Todostate>
          <TodoInput />
          <TodoList />
        </Todostate>
      </div>
    </div>
  )
}

export default App;