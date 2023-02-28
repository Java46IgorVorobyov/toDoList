import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './views/App'
import "./views/styles/reset.scss";
import "./views/styles/common.scss";
import { Provider } from 'react-redux';

import store from './redux/store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
)
