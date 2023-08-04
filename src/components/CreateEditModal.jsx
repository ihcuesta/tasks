import { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import TasksContext from '../context/tasks'
import Button from 'react-bootstrap/Button'

export default function CreateEditModal() {
  const [name, setName] = useState('')

  const { createTask, showModal, handleCloseModal, task, editTask } = useContext(TasksContext)

  useEffect(() => {
    task ? setName(task.name) : setName('')
  }, [task])

  const handleSave = () => {
    task ? editTask(task.id, name) : createTask(name)
    handleCloseModal()
  }

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="nameTask">Name</Form.Label>
          <Form.Control type="text" id="nameTask" onChange={(e) => setName(e.target.value)} value={name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
