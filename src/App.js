// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  const userInfo = {
    firstName: 'Ім\'я',
    lastName: 'Прізвище',
    city: 'Ужгород',
    hobby: 'Хобіхорсинг',
    group: '126 Інофрмаційні системи та технології',
  };

  return (
    <Router>
      <div>
        <Header firstName={userInfo.firstName} lastName={userInfo.lastName} />
        <nav>
          <Link to="/">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 city={userInfo.city} />} />
          <Route path="/page2" element={<Page2 hobby={userInfo.hobby} />} />
        </Routes>
        <Footer group={userInfo.group} />
      </div>
    </Router>
  );
}

export default App;
