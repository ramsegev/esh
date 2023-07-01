import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <>
        <Router >
            <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
            <Footer/>
        </Router>
      </>
  );
};

export default App;