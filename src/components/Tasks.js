import Task from './Task'

export const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}  />
            //<Task key={task.id}>{task.text}</Task>
            ))}
        </>
    )
}

export default Tasks
