import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
       <Switch>
         <Route exact path='/'>
           <Home></Home>

         </Route>

         <Route exact path='/home'>
           <Home></Home>

         </Route>

        <Route exact path='/signUp'>
          <SignUp></SignUp>

        </Route>
        <Route exact path='/signIn'>
          <SignIn></SignIn>

        </Route>

        <PrivateRoute  path='/dashboard'>
          <Dashboard></Dashboard>

        </PrivateRoute>

       </Switch>
      
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
