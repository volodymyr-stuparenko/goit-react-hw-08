// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Toaster } from 'react-hot-toast';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from './redux/store.js';
// import { ThemeProvider } from '@mui/material/styles';
// import App from './components/App/App.jsx';
// import './index.css';
// import MyTheme from './MyTheme.js';
// import 'modern-normalize';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider MyTheme={MyTheme}>
//       <BrowserRouter>
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <App />
//             <Toaster />
//           </PersistGate>
//         </Provider>
//       </BrowserRouter>
//     </ThemeProvider>
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './components/App/App.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <Toaster />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
