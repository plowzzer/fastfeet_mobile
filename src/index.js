import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

// import './config/reactotronConfig';

// import { store, persistor } from './store';
// import App from './App';

import Routes from './routes';

// export default function Index() {
//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
//       <App />
//     </>
//   );
// }

export default function App() {
  return <Routes />;
}
