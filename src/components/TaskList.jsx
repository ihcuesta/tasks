import TaskCard from './TasksCard'

export default function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} name={task.name} id={task.id} />
      ))}
    </>
  )
}
