import React, {Component} from 'react';
import blocksStore from "../../store/BlocksStore";
import Block from "./Main/Block";

class Archives extends Component {
  constructor(){
    super();
    this.bloks = blocksStore.getAll();
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Archives</h1>
            <div className={'mt-2 mb-2'}>
              {this.props.match.params.article}
            </div>
          </div>
          {
            this.bloks.map((block, i) => {
              return (
                <div className="col-12 mb-4" key={i}>
                  <Block title={block.title} text={block.text}/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Archives;
