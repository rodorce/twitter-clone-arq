import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            username: username,
            name: name,
          },
        },
      });
      if (error) throw error;
      alert("Register successful");

      console.log(data);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Registro de usuario
          </h3>
          <form
            action="#"
            className="flex flex-col space-y-5"
            onSubmit={handleSignUp}
          >
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Correo electronico
              </label>
              <input
                type="email"
                id="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Usuario
              </label>
              <input
                type="text"
                id="username"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Contraseña
                </label>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Registrar cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
