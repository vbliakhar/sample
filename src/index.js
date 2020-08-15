import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducers'


const store = createStore(rootReducer)

const aplication = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    {aplication}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
