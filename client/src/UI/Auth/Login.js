import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAppLog } from "../../api/api_methods";
import { useAuth } from "../../contexts/Auth";
import { supabase } from "../../services/supabaseClient";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const tryLogin = async (e) => {
    e.preventDefault();

    // Calls `signIn` function from the context
    const { data, error } = await signIn({ email, password });
    if (error) {
      alert("error signing in");
    } else {
      postAppLog(data.user.user_metadata.username);
      // Redirect user to Dashboard
      navigate("/");
    }
  };
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Inicio de sesión
          </h3>
          <form
            action="#"
            className="flex flex-col space-y-5"
            onSubmit={tryLogin}
          >
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                autofocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
