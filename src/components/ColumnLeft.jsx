import { useContext } from 'react'
import TasksContext from '../context/tasks'
import CreateEditModal from './CreateEditModal'
import TaskList from './TaskList'
import Button from 'react-bootstrap/Button'

export default function ColumnLeft() {
  const { tasks, handleShowModal } = useContext(TasksContext)
  return (
    <div className="column-container">
      <h2>To Do</h2>
      <div className="list-to-do">
        <TaskList tasks={tasks} />
      </div>
      <Button variant="info" onClick={() => handleShowModal()}>
        Create Task
      </Button>
      <CreateEditModal />
    </div>
  )
}
