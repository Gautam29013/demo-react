import React from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Footer from './components/footer';
import Weather from './components/weather';


const App = () => {
  return <div>
    <Header />
    <Main />
    <Footer />
    <Weather />
  </div>;
};

export default App;