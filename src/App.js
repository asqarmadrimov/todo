import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("")

  //HendelInput
  const inputValue = (e) => setInputTodo(e.target.value);

  //AddTodo
  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      title: inputTodo,
      isCompletad: false
    }
    setTodos([...todos, newTodo]);

    setInputTodo("");
  }

  //RemuvItem
  const remuvItemHendel = (id) => {
    let removtodo = todos.filter((todo) => todo.id !== id);

    setTodos(removtodo)
  }

  //ChekInput
  const todoChekInp = (id) => {
    let chekInp = todos.map((todo) => {
      if(todo.id === id) {
        todo.isCompletad = !todo.isCompletad
      }
      return todo

    })
    setTodos(chekInp)
  }

  return (
    <div className="App">
      <div className='container'>
        <h4 className='h2 font-mo py-3'>Todo List</h4>
        <form className='w-75 me-auto ms-auto font-monospace d-flex' onSubmit={addTodo}>
          <input className='
          form-control'
            type="text"
            placeholder='To write...'
            value={inputTodo}
            onChange={inputValue}
            id="todo-input"
          />
          <button
            className='btn btn-secondary'
          // onSubmit={addTodo}
          >
            Submit
          </button>
        </form>

        <ul className="list-group mt-3">

          {todos.map((todo, i) => {
            return (
              <li className="list-group-item w-50 my-2 me-auto ms-auto list-group-item-dark" key={todo.id}>
                <div className='d-flex justify-content-between aling-item-centr px-3'>
                  <div className='d-flex aling-items-centr' style={{textDecoration: todo.isCompletad ? "line-through" : "none"}}>
                    <input
                    className='form-check-input'
                    onChange={() => todoChekInp(todo.id)}
                    type="checkbox" 
                    checked={todo.isCompletad}/>
                    <p className='mx-1'>{++i}-</p>
                    <strong>{todo.title}</strong>
                  </div>
                  <button className='btn btn-light' onClick={() => remuvItemHendel(todo.id)}>X</button>
                </div>
              </li>
            )
          })}

        </ul>

      </div>
    </div>
  );
}

export default App;