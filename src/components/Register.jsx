import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://task-backend-ueoa.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al registrar');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-4">Registrarse</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre de Usuario</label>
            <input
              type="text"
              className="border p-2 w-full rounded-lg"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="border p-2 w-full rounded-lg"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-blue-600 transition duration-200">
            Registrarse
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Register;
