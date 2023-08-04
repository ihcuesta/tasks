import { createContext, useState } from 'react'
import axios from 'axios'

const TasksContext = createContext()

function Provider({ children }) {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  }

  const fetchTask = async (id) => {
    const response = await axios.get(`http://localhost:3000/tasks/${id}`)
    setTask(response.data)
  }

  const createTask = async (name) => {
    const response = await axios.post('http://localhost:3000/tasks', {
      name,
    })

    const updatedTasks = [...tasks, response.data]
    setTasks(updatedTasks)
  }

  const editTask = async (id, newName) => {
    const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
      name: newName,
    })

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(updatedTasks)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setTask(null)
  }

  const handleShowModal = (id = null) => {
    setShowModal(true)
    if (id) {
      fetchTask(id)
    }
  }

  const valueToShare = {
    tasks,
    task,
    showModal,
    fetchTasks,
    createTask,
    editTask,
    deleteTask,
    handleCloseModal,
    handleShowModal,
  }

  return <TasksContext.Provider value={valueToShare}>{children}</TasksContext.Provider>
}

export { Provider }
export default TasksContext
