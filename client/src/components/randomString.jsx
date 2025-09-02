import { useState } from "react";
import {generate} from "random-words";
import {Link, Router, Routes, Route} from "react-router-dom";

export default function RandomString() {
  <link to="/randomString" />
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(3);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePassword = () => {
    // Generate words
    let newPass = "";
    let i = 0;
    while(i<length){
      i++;
      newPass += generate(1)+"_";
    }
    if(symbols){
      newPass += "!@#$%^&*()_+".charAt(Math.floor(Math.random() * 10));
    }
    if(numbers){
      newPass += Math.floor(Math.random() * 10);
    } 
    document.getElementById("copyButton").style.backgroundColor = "black";
    setPassword(newPass);
  }
  
  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  };

  const changeColor= () => {
    document.getElementById("copyButton").style.backgroundColor = "green";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="w-auto bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center border border-white/30">
        <h1 className="text-2xl font-bold text-black mb-6 drop-shadow">
          🔐 Generate Simple Password
        </h1>

        {/* Display Box */}
        <div className="flex items-center bg-white/30 rounded-xl overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 p-3 bg-transparent text-black text-lg outline-none"
            placeholder="Your password will appear here..."
          />
          <button
            onClick={() => { copyPassword(); changeColor(); }}
            id="copyButton"
            className="bg-black hover:bg-slate-600 text-white px-4 py-2 transition-all rounded-xl backdrop-blur-lg"
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="text-left text-black space-y-3 mb-6">
          <label className="flex justify-between items-center">
            <span>Length in Words:</span>
            <input
              type="number"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="ml-2 w-20 p-1 rounded-md text-black"
            />
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="w-4 h-4"
            />
            Numbers (0-9)
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
              className="w-4 h-4"
            />
            Symbols (!@#...)
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-black hover:bg-slate-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all"
        >
          Generate Password
        </button>
        
      </div>
    </div>
  );
}
