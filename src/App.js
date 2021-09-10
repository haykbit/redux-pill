import Propierties from './components/Propierties/Propierties';
import Home from './pages/Home/Home';
import ReduxProvider from './redux/Provider';
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <Route path="/" 
        exact 
        render={(routeProps) => <Home {...routeProps} />}
        />
        <Route path="/dashboard" 
        exact 
        render={(routeProps) => <Propierties {...routeProps} />}
        />
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
