import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";
import NeonText from "../UI/NeonText/NeonText";
import { AuthContext } from "../context";
import MySpinner from "../UI/spinner/MySpinner";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MySpinner />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route
        path='*'
        element={
          <NeonText>
            hU3Ta <br />
            Pag3 NoT f0Un4
          </NeonText>
        }
      />
      <Route path='/login' element={<Navigate to='/posts' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default AppRouter;
