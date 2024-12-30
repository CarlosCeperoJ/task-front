import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task._id} className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 break-words">{task.title}</h2>
              <p className="text-gray-600 break-words">{task.description}</p>
              <p className="text-gray-500 text-sm">{new Date(task.createdAt).toLocaleString()}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded-lg ${task.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => toggleTaskCompletion(task._id, task.completed)}
              >
                {task.completed ? 'Completada' : 'Pendiente'}
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => deleteTask(task._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
