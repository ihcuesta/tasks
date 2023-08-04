import { useContext } from 'react'
import TasksContext from '../context/tasks'

export default function TasksCard({ name, id }) {
  const { deleteTask, handleShowModal } = useContext(TasksContext)
  return (
    <div className="task-card">
      <div>
        <p>{name}</p>
      </div>
      <div className="edit" onClick={() => handleShowModal(id)}>
        <p>&#9999;</p>
      </div>
      <div className="delete" onClick={() => deleteTask(id)}>
        <p>&times;</p>
      </div>
    </div>
  )
}
