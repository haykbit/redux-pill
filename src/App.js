import Propierties from './components/Propierties/Propierties';
import ReduxProvider from './redux/Provider';
// var cors = require('cors');

// app.use(cors())

function App() {
  return (
    <ReduxProvider>
      <Propierties />
    </ReduxProvider>
  );
}

export default App;
