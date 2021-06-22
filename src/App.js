import React from "react";
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = (props) =>  {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar state={props.state.friendsSidebar}/>
              <div className='content-wrapper'>
                  <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
                  <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
