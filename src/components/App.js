import React, {Component, Fragment} from 'react';
import '../styles/App.scss';
import {hot} from "react-hot-loader";
import Menu from "./Menu";
import Main from "./Layout/Main";
import {Route, Router, Switch} from "react-router-dom";
import Contacts from "./Layout/Contacts";
import Form from "./Layout/Form";
import {createHashHistory} from 'history'
import Archives from "./Layout/Archives";
import Layout from "./Layout";

class App extends Component {

  render() {
    return (
      <Fragment>
        <Menu/>
        <Layout>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/form' component={Form}/>
            <Route path='/archives/:article' component={Archives}/>
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default hot(module)(App);
