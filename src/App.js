import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { NavbarComponent } from './components'
import {Home, Sukses, About, Masukan} from './pages'
export default class App extends Component {
  render() {
    return (
<BrowserRouter>
<NavbarComponent />
  <main>
    <Switch>
      <Route path="/" component={Home}  exact/>
      <Route path="/sukses" component={Sukses} exact/>     
      <Route path="/about" component={About} exact/>  
      <Route path="/masukan" component={Masukan} exact/> 
    </Switch>
  </main>
</BrowserRouter>
    )
  }
}