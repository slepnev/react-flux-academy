import React, {Component} from 'react';

class Archives extends Component {
  render() {
    const { histroy } = this.props;
    console.log(histroy.isActive());
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Archives</h1>
            <div className={'mt-2 mb-2'}>
              {this.props.match.params.article}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Archives;
