import React from "react";
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () =>  {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='content-wrapper'>
                  <Route path='/profile' component={Profile} />
                  <Route path='/dialogs' component={Dialogs} />
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
