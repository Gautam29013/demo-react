import React from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Footer from './components/footer';
import Weather from './components/weather';
import UserStatus from './components/userstatus';
import CopyInput from './components/copyinput';

const App = () => {
  return <div>
    <Header />
    <Main />
    <Footer />
    <Weather />
    <UserStatus isLoggedIn={true} isadmin={true} />
    <CopyInput />
  </div>;
};
export default App; 