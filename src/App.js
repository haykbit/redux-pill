import Propierties from './components/Propierties/Propierties';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
import Dashboard from "./pages/Dashboard/Dashboard";
import ReduxProvider from "./redux/Provider";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/propierties"
          exact
          render={(props) => <Propierties {...props} />}
        />
        <Route
          path="/dashboard"
          exact
          render={(props) => <Dashboard {...props} />}
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
