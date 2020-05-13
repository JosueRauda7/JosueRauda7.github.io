import React from 'react';
import ReactDOM from 'react-dom';

//Assets
import 'bootstrap/dist/css/bootstrap.css';
import './Global.css';

//Components
import App from './components/App';

const container = document.getElementById('App');

ReactDOM.render(<App />, container);