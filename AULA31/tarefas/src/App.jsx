import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      texto: 'Ir para a academia', 
      categoria: 'Exercícios',
      feito: false
    },

    {
      id: 2,
      texto: 'Fazer tarefa do +praTI',
      categoria: 'Estudos',
      feito: false 
    },

    {
      id: 3,
      texto: 'Limpar a casa',
      categoria: 'Diárias',
      feito: false 
    }

  ])


const concluirTarefa = (id) =>{
  setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, feito: !todo.feito} : todo
))

}

  return (
  <div className='app'>
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="conteudo">
            <input type="checkbox" checked={todo.feito} onChange={() =>
              concluirTarefa(todo.id)
            }/>
            <p>{todo.texto}</p>
            <p>({todo.categoria})</p>
          </div>
        
        </div>
      ))}
    </div>
  </div>
  )
  
}

export default App
