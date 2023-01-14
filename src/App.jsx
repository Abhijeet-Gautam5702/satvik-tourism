import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./Homepage"
import {About} from "./sections/About"
import { Book } from "./sections/Book"

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/sections/about" element={<About/>} />
          <Route path="/sections/book" element={<Book/>} />
        </Routes>
    </div>
  )
}

export default App
