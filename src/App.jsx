import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pagehead from './Pages/PageHead'
import Portada from './Pages/Portada'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Portada/>}/>
        <Route path="/pagehead" element={<Pagehead/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
