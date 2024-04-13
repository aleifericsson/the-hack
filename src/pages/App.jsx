import '../css/App.css'
import About from './About';
import Home from './Home';
import Unity from './Unity';
import Navig from '../components/Navig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from '../components/Chatbot';

function App() {
  return (
    <div className='app'>
      <Router>

      <Navig />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/unity' element={<Unity />} />
        <Route path='/chatbot' element={<ChatBot />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App