import Propierties from './components/Propierties/Propierties';
import ReduxProvider from './redux/Provider';

function App() {
  return (
    <ReduxProvider>
      <Propierties />
    </ReduxProvider>
  );
}

export default App;
