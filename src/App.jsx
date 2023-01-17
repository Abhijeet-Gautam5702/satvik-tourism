import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./Homepage"
import {About} from "./About"
import { Book } from "./Book"

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Book" element={<Book/>} />
        </Routes>
    </div>
  )
}

export default App
