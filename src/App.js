import Propierties from './components/Propierties/Propierties';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
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
        <Route path="/login" 
        exact 
        render={(routeProps) => <Login {...routeProps} />}
        />
        <Route path="/logout" 
        exact 
        render={(routeProps) => <Logout {...routeProps} />}
        />
        <Route path="/register" 
        exact 
        render={(routeProps) => <Register {...routeProps} />}
        />
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
