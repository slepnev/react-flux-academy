import React, {Component} from 'react';
import Block from "./Main/Block";
import blocksStore from "../../store/BlocksStore";
import dispatcher from "../../dispatcher";
import * as BlockActions from "../../actions/BlockActions";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      blocks: blocksStore.getAll()
    };

    this.addBlock = this.addBlock.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
  }

  addBlock(){
    // dispatcher.dispatch({type: "CREATE_BLOCK"});
    // blocksStore.createBlock();
    BlockActions.createBlock();
  }

  delBlock(){
    BlockActions.deleteBlock(0);
  }

  reloadBlock(){
    BlockActions.reloadBlock();
  }

  getBlocks(){
    this.setState({blocks: blocksStore.getAll()});
  }

  componentWillMount(){
    blocksStore.on('change', this.getBlocks);
    console.log(blocksStore.listenerCount('change'));
  }

  componentWillUnmount(){
    blocksStore.removeListener('change', this.getBlocks);
  }

  render() {
    const load = (<div className="col-12 mb-4">Загрузка...</div>);
    return (
      <div className="container mt-3">
        <div className="row">
          {
            (this.state.blocks.length) ?
              this.state.blocks.map((block, i) => {
                return (
                  <div className="col-12 mb-4" key={i}>
                    <Block title={block.title} text={block.text}/>
                  </div>
                )
              }) : load
          }
          <div className="col-12 mb-4">
            <button className='btn btn-danger float-left' onClick={this.delBlock}>Удалить первую</button>
            <button className='btn btn-warning float-left ml-3' onClick={this.reloadBlock}>Перезагрузить</button>
            <button className='btn btn-success float-right' onClick={this.addBlock}>Добавить новую запись</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
