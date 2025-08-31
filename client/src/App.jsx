import { useState } from 'react'
import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Simple from './components/simple'
import Randomstring from './components/RandomString'
import './App.css'
import {Initial} from './components/initial'

function App() {

  return (
    <>
    {/* <RandomString /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Initial />} />
        <Route path='/simplePassword' element={<Simple/>}/> Simple Password Generator
        <Route path='/randomString'element={<Randomstring/>} /> String Combination Password Generator
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
