import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import './styles/app.scss';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
