import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/filters/store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import './index.css';
import 'modern-normalize';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
