import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
      <>
        <Router >
            <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </>
  );
};

export default App;