import React, {Component, Fragment} from 'react';
import '../styles/App.scss';
import {hot} from "react-hot-loader";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Main from "./Layout/Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Contacts from "./Layout/Contacts";
import Form from "./Layout/Form";
import {createHashHistory} from 'history'

const history = createHashHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {'title': 'Welcome to React'};
  }

  setTitle() {
    setTimeout(() => this.setState({'title': 'Welcome to React New'}), 1000);
  }

  changeTitle(title) {
    this.setState({'title': title});
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <Fragment>
          <Menu history={history}/>
          <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/form' component={Form}/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
