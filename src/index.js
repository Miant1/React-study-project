import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {name: 'Anton', id: '1'},
    {name: 'Rostik', id: '2'},
    {name: 'Egor', id: '3'},
    {name: 'Sergei', id: '4'}
]

let messageData = [
    {message: 'Hi, how are you?', id: '1'},
    {message: 'I`am good, and you?', id: '2'},
    {message: 'Nice to meet you', id: '3'},
]

let postData = [
    {id: '1', message: 'Hello, how are you', likes: '12'},
    {id: '2', message: 'Hey yo', likes: '30'},
    {id: '2', message: 'My first post', likes: '18'}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
