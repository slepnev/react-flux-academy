import React, {Component, Fragment} from 'react';

class Block extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <button className='btn btn-info'>More info</button>
      </Fragment>
    );
  }
}

export default Block;
