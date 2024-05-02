
import './App.css';
import DashboardPage from './DashboardPage';
import { createPinia } from 'pinia';
import { PiniaPlugin } from 'pinia/plugin';
import { render } from 'react-dom';

const pinia = createPinia();

pinia.use(PiniaPlugin);

function App() {
  return (
    <pinia.Provider>
    <DashboardPage />
  </pinia.Provider>);
}

export default App;
