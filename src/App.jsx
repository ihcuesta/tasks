import { useEffect, useContext } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnLeft from './components/ColumnLeft'
import TasksContext from './context/tasks'

function App() {
  const { fetchTasks } = useContext(TasksContext)

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="wrapper">
      <h1>Tasks List</h1>
      <div className="container">
        <ColumnLeft />
      </div>
    </div>
  )
}

export default App
