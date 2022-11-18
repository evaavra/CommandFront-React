import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommandsPage from './pages/CommandsPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/commands"element={<CommandsPage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
