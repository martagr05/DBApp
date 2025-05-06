import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const MensScreen = lazy(() => import("../pages/MensScreen"));
const WomensScreen = lazy(() => import("../pages/WomensScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));


const AppRouter = () => {
  return (
    <>
    {/*Navbar al estar fuera de Suspense siempre se va a cargar */}
      <Navbar />

    {/*Todo lo que esta dentro de suspense se carga segun se va necesitando 
    mientras carga se muestra lo que este dentro de fallback*/}
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/mens" component={MensScreen} />
          <Route exact path="/womens" component={WomensScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />

          {/*Lo que hace Redirect es que si se pone solo / se redirige a /mens */}
          <Redirect to="/mens" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
