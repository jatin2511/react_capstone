import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Form  from './components/Form/Index'
import Genre from './components/Genre/Index'
import Movies from './components/Movies/Index'
import Info from './components/Info/Index'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/genre' element={<Genre />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='*' element={<h1>not found</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App