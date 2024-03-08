// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
// import Tools from './components/ Tools';
// import Pricing from './components/ Pricing';
// import Blog from './components/ Blog';
// import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/tools" element={<Tools />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
