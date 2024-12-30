import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task._id}
          className={`bg-white p-4 rounded-lg shadow-lg ${task.completed ? 'bg-green-100' : 'bg-red-100'}`}
        >
          <div className="flex flex-wrap justify-between items-start">
            {/* Información de la tarea */}
            <div className="flex-1 min-w-0">
              <h2
                className={`text-xl font-bold text-gray-800 break-words ${
                  task.completed ? 'line-through' : ''
                }`}
              >
                {task.completed ? (
                  <i className="fas fa-check-circle mr-2 text-green-500"></i>
                ) : (
                  <i className="fas fa-times-circle mr-2 text-red-500"></i>
                )}
                {task.title}
              </h2>
              <p className="text-gray-600 break-words">{task.description}</p>
              <p className="text-gray-500 text-sm">{new Date(task.createdAt).toLocaleString()}</p>
            </div>

            {/* Botones */}
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button
                className={`p-2 rounded-lg ${
                  task.completed ? 'bg-yellow-500' : 'bg-green-500'
                } text-white`}
                onClick={() => toggleTaskCompletion(task._id, task.completed)}
              >
                <i className={`fas ${task.completed ? 'fa-undo' : 'fa-check'} mr-2`}></i>
                {task.completed ? 'Pendiente' : 'Completada'}
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => deleteTask(task._id)}
              >
                <i className="fas fa-trash mr-2"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
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

