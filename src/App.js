import './App.css';
import Body from'../src/components/Body.js';
import appStore from './utils/appstore.js';
import{ Provider } from 'react-redux';

function App() {
  return <Provider store={appStore}>
    <Body/>
  </Provider>;
}

export default App;
