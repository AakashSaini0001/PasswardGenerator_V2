import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./components/darkMode";

export function Initial() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 p-4">
      <DarkMode/>
      <div className="w-auto bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center border border-white/30">
        <h1 className="text-3xl font-bold text-black mb-4 drop-shadow">
          🔐 Welcome to the Password Generator!
        </h1>
        <p className="text-lg text-black mb-6 drop-shadow">
          Choose your preferred password type to get started.
        </p>
        <Link to="/simplePassword">
          <button className="bg-black hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition-all mr-5">
            Simple Password
          </button>
        </Link>
        <Link to="/catchyPassword">
            <button 
            className="bg-black hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition-all">
                Catchy Password
            </button>
        </Link> 
      </div>
    </div>
  );
}
