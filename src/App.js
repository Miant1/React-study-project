import React from "react";
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import DialogItem from "./components/dialogs/DialogItem/DialogItem";
import MessageItem from "./components/dialogs/MessageItem/MessageItem";

const App = ({postData, dialogData, messageData}) =>  {   // деструктуризация объекта пропс (при вызове пропса не нужно писть props.something)

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='content-wrapper'>
                  <Route path='/profile' render={() => <Profile postData={postData}/>} />
                  <Route path='/dialogs' render={() => <Dialogs dialogData={dialogData} messageData={messageData}/>} />
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
