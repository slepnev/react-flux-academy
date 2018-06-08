import React, {Component} from 'react';
import Block from "./Main/Block";
import BlocksStore from "../../store/BlocksStore";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      blocks: BlocksStore.getAll()
    }
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          {
            this.state.blocks.map((block, i) => {
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

export default Main;
