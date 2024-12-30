/*
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzIxNWMwZTY1MzY0NTQ4YWMxOTQwZiIsImlhdCI6MTczNTUyOTkzNCwiZXhwIjoxNzM1NTMzNTM0fQ.O5eUQA5RSdPBwYhTgRtOtmD4IZW2maDR-FMiFfslABA'; // Reemplaza con el token de autenticación (si es necesario)
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Usar useEffect para obtener tareas al cargar el componente
  useEffect(() => {
    fetchTasks();
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/


/*

import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzIxNWMwZTY1MzY0NTQ4YWMxOTQwZiIsImlhdCI6MTczNTUzNzMwMSwiZXhwIjoxNzM1NTQwOTAxfQ.2oIXLgL_3rXqFkXevy6AaMtkTQUrKDcQJx-6zSPYvXY'; // Reemplaza con el token de autenticación (si es necesario)
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Función para agregar una nueva tarea
  const addTask = async (title, description) => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzIxNWMwZTY1MzY0NTQ4YWMxOTQwZiIsImlhdCI6MTczNTUzNzMwMSwiZXhwIjoxNzM1NTQwOTAxfQ.2oIXLgL_3rXqFkXevy6AaMtkTQUrKDcQJx-6zSPYvXY'; // Reemplaza con el token de autenticación (si es necesario)
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
      setMessage('Tarea agregada exitosamente');
      setTimeout(() => setMessage(''), 3000); // Limpiar el mensaje
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzIxNWMwZTY1MzY0NTQ4YWMxOTQwZiIsImlhdCI6MTczNTUzNzMwMSwiZXhwIjoxNzM1NTQwOTAxfQ.2oIXLgL_3rXqFkXevy6AaMtkTQUrKDcQJx-6zSPYvXY'; // Reemplaza con el token de autenticación (si es necesario)
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setTasks(tasks.filter(task => task._id !== id));
      setMessage('Tarea eliminada exitosamente');
      setTimeout(() => setMessage(''), 3000); // Limpiar el mensaje 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Función para marcar una tarea como completada o pendiente
  const toggleTaskCompletion = async (id, completed) => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzIxNWMwZTY1MzY0NTQ4YWMxOTQwZiIsImlhdCI6MTczNTUzNzMwMSwiZXhwIjoxNzM1NTQwOTAxfQ.2oIXLgL_3rXqFkXevy6AaMtkTQUrKDcQJx-6zSPYvXY'; // Reemplaza con el token de autenticación (si es necesario)
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed }),
      });
      const data = await response.json();
      setTasks(tasks.map(task => (task._id === id ? data : task)));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Usar useEffect para obtener tareas al cargar el componente
  useEffect(() => {
    fetchTasks();
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Filtrar tareas según el estado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center my-4">Lista de Tareas</h1>

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
    </div>
  );
}

export default App;*/


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('https://task-backend-ueoa.onrender.com/api/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
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
      await fetch(`https://task-backend-ueoa.onrender.com/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
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
      const data = await response.json();
      setTasks(tasks.map(task => (task._id === id ? data : task)));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Usar useEffect para obtener tareas al cargar el componente
  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Filtrar tareas según el estado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <Router>
      <div className="App container mx-auto p-4">
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
    </Router>
  );
}

export default App;