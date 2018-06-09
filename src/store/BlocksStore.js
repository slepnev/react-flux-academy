import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class BlocksStore extends EventEmitter {
  constructor(){
    super();
    this.blocks_fetch = [];
    this.blocks = [
      {
        'title': 'Heading1',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem.'
      },
      {
        'title': 'Heading2',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem.'
      },
      {
        'title': 'Heading3',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem.'
      },
    ]
  }

  createBlock(){
    this.blocks.push({
        'title': `Heading${this.blocks.length+1}`,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem.'
      });

    this.emit('change');
  }

  deleteBlock(id){
    this.blocks.splice(id, 1);
    this.emit('change');
  }

  getAll(){
    return this.blocks;
  }

  fetchBlock(){
    this.blocks_fetch = this.blocks;
    this.blocks = [];
    this.emit('change');
  }

  receiveBlock(){
    this.blocks = this.blocks_fetch;
    this.emit('change');
  }

  handleActions(action){
    console.log('BlocksStore action', action);
    switch (action.type) {
      case "CREATE_BLOCK": {
        this.createBlock();
        break;
      }
      case "DELETE_BLOCK": {
        this.deleteBlock(action.id);
        break;
      }
      case "FETCH_BLOCK": {
        this.fetchBlock();
        break;
      }
      case "RECEIVE_BLOCK": {
        this.receiveBlock();
        break;
      }
    }
  }
}

const blocksStore = new BlocksStore;
dispatcher.register(blocksStore.handleActions.bind(blocksStore));

export default blocksStore;