import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import About from './Pages/About';
import Jobboard from './Pages/Jobboard';
import Networking from './Pages/Networking';
import Resource from './Pages/Resource';
import Skilldev from './Pages/Skilldev';
import Stories from './Pages/Stories';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path = '/' exact Component={Home}/>
            <Route path = '/about' Component={About}/>
            <Route path = '/details' Component={Details}/>
            <Route path = '/jobboard' Component={Jobboard}/>
            <Route path = '/networking' Component={Networking}/>
            <Route path = '/resource' Component={Resource}/>
            <Route path = '/skilldev' Component={Skilldev}/>
            <Route path = '/stories' Component={Stories}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
