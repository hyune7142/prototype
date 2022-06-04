import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';

const customHistory = createBrowserHistory();

// Redux Store & Redux Saga
const store = configureStore(customHistory);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>ProtoType</div>
      <div>이어서 계속...</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
