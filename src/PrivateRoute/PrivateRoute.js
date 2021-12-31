import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return   <h1>i am loading</h1>
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signIn",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;