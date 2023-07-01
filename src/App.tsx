import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from './components/Pages/Blog';
import Post from "./components/Pages/Post";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/posts/:id" element={<Post/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
};

export default App;