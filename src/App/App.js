import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import "./App.css"
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Lims from '../components/Lims/Lims';
import Libary from '../Pages/Library/Libary'
import Library1 from '../Pages/Library1/Library1'
import About from '../Pages/About/About'
import Events from '../Pages/Events/Events'
import Contact from '../components/contact/Contact'
import Search from '../Pages/search/Search'
import Obroduvane from '../Pages/obroduvane/Obroduvane'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/lims' element={<Lims />}/>
            <Route path='/libary' element={<Libary />}/>
            <Route path='/library' element={<Library1 />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/obroduvane' element={<Obroduvane/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
