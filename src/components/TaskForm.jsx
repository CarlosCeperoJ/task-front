import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, showModal, setShowModal }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!newTaskTitle) {
      setError('El título es obligatorio');
      return;
    }
    await addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setShowModal(false);
    setError('');
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg w-1/2">
          <h2 className="text-2xl mb-4">Agregar Nueva Tarea</h2>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Título de la nueva tarea"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Descripción de la nueva tarea"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              className="bg-gray-500 text-white p-2 mr-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-lg"
              onClick={handleSubmit}
            >
              Agregar Tarea
            </button>
          </div>
        </div>
      </div>
    )
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default TaskForm;