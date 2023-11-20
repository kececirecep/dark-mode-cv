import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  // Redux store'dan darkMode durumunu alıyoruz
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  // useEffect ile darkMode durumuna göre stil değişikliği yapabilirsiniz
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path="/projects" element={<Projects />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
