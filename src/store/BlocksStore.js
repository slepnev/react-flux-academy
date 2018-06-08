// import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { EventEmitter } from "events";

class BlocksStore extends EventEmitter {
  constructor(){
    super();
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

  getAll(){
    return this.blocks;
  }
}

const blocksStore = new BlocksStore;

export default blocksStore;