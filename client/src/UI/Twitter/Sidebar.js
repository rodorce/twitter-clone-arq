import React from "react";

const Sidebar = () => {
  return (
    <nav class="pt-10 px-2 bg-black">
      <img
        src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
        alt=""
        srcset=""
        className="object-scale-down h-32 w-32 mx-auto mb-24"
      />
      <a
        href="#"
        class="group flex items-center px-4 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300"
      >
        <svg
          class="mr-4 h-6 w-6 "
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
          />
        </svg>
        Inicio
      </a>

      <button class="bg-red-400 w-48 mt-5 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
        Cerrar sesión
      </button>
    </nav>
  );
};

export default Sidebar;
