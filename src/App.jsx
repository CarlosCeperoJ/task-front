import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('https://task-backend-ueoa.onrender.com/api/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setTasks([]); // Asegúrate de que tasks sea un array vacío en caso de error
    }
  };

  // Función para agregar una nueva tarea
  const addTask = async (title, description) => {
    try {
      const response = await fetch('https://task-backend-ueoa.onrender.com/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error('Error adding task');
      }
      const data = await response.json();
      setTasks([...tasks, data]);
      setMessage('Tarea agregada exitosamente');
      setTimeout(() => setMessage(''), 3000); // Limpiar el mensaje después de 3 segundos
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`https://task-backend-ueoa.onrender.com/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error deleting task');
      }
      setTasks(tasks.filter(task => task._id !== id));
      setMessage('Tarea eliminada exitosamente');
      setTimeout(() => setMessage(''), 3000); // Limpiar el mensaje después de 3 segundos
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Función para marcar una tarea como completada o pendiente
  const toggleTaskCompletion = async (id, completed) => {
    try {
      const response = await fetch(`https://task-backend-ueoa.onrender.com/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (!response.ok) {
        throw new Error('Error toggling task completion');
      }
      const data = await response.json();
      setTasks(tasks.map(task => (task._id === id ? data : task)));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login');
  };

  // Usar useEffect para obtener tareas al cargar el componente
  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirige al login si no hay token
    } else {
      fetchTasks(); // Obtiene las tareas si hay token
    }
  }, [token, navigate]); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Filtrar tareas según el estado
  const filteredTasks = Array.isArray(tasks) ? tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  }) : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/" element={token ? (
          <>
            <h1 className="text-4xl font-bold text-center my-4">Lista de Tareas</h1>

            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center">
                {message}
              </div>
            )}

            <div className="mb-4 text-center">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-plus mr-2"></i> Agregar Tarea
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg ml-4"
                onClick={logout}
              >
                <i className="fas fa-sign-out-alt mr-2"></i> Cerrar Sesión
              </button>
            </div>

            <div className="mb-4 text-center space-x-2">
              <button
                className={`p-2 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setFilter('all')}
              >
                Todas
              </button>
              <button
                className={`p-2 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setFilter('completed')}
              >
                Completadas
              </button>
              <button
                className={`p-2 rounded-lg ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setFilter('pending')}
              >
                Pendientes
              </button>
            </div>

            <div className="border-t border-gray-300 mt-4"></div>

            <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />

            <TaskForm addTask={addTask} showModal={showModal} setShowModal={setShowModal} />
          </>
        ) : (
          <Navigate to="/login" />
        )} />
      </Routes>
    </div>
  );
}

export default App;
