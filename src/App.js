import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/projects' element={<Projects/>} />
                <Route exact path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
