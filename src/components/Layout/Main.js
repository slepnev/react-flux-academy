import React, {Component} from 'react';
import Block from "./Main/Block";

class Main extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <Block title='Heading1'/>
          </div>
          <div className="col-12 mb-4">
            <Block title='Hadeing2'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
