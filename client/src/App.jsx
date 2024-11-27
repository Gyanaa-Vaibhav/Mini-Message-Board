import './styles/App.css'
import Home from "./pages/Home.jsx";
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form.jsx";
import Messages from "./pages/Messages.jsx";
import Error from "./pages/Error.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/messages' element={<Messages />}/>
              <Route path='/messages/new' element={<Form />}/>
              <Route path='/*' element={<Error />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
