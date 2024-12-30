import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="border rounded-lg p-4 mt-4">
      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task._id}
            className={`p-4 mb-4 border-b border-gray-300 ${task.completed ? 'bg-green-100' : 'bg-red-100'}`}
          >
            <div className="flex justify-between items-center">
              <span className={`font-semibold text-lg${task.completed ? 'line-through' : ''}`}>
                {task.completed ? <i className="fas fa-check-circle mr-2 text-green-500"></i> : <i className="fas fa-times-circle mr-2 text-red-500"></i>}
                {task.title }
              </span>
              <div>
                <button
                  className={`p-2 mr-2 rounded-lg ${task.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
                  onClick={() => toggleTaskCompletion(task._id, task.completed)}
                >
                  <i className={`fas ${task.completed ? 'fa-undo' : 'fa-check'} mr-2`}></i>
                  {task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-lg"
                  onClick={() => deleteTask(task._id)}
                >
                  <i className="fas fa-trash mr-2"></i> Eliminar
                </button>
              </div>
            </div>
            
            <p >{task.description}</p>
            <p className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleDateString()}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;