import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Principal from './Pages/Principal'
import Portada from './Pages/Portada'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Portada/>}/>
        <Route path="/principal" element={<Principal/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
