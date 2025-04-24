import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MensScreen from '../pages/MensScreen'
import WomensScreen from '../pages/WomensScreen'
import SearchScreen from '../pages/SearchScreen'
import Navbar from '../components/Navbar'
import CharacterScreen from '../pages/CharacterScreen'
import { Redirect } from 'react-router-dom'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/mens" component={MensScreen}/>
        <Route exact path="/womens" component={WomensScreen}/>
        <Route exact path="/search" component={SearchScreen}/>
        <Route exact path="/character/:id" component={CharacterScreen}/>

        {/*Lo que hace Redirect es que si se pone solo / se redirige a /mens */}
        <Redirect to="/mens"/>
      </Switch>
    </>
  )
}

export default AppRouter
