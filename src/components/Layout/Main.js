import React, {Component} from 'react';
import Block from "./Main/Block";

class Main extends Component {
  render() {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem. Animi blanditiis commodi cupiditate dolor dolorem, enim eum laboriosam molestiae nobis non placeat porro quae qui, quidem sit tenetur veritatis voluptatibus? Accusamus doloremque doloribus ducimus provident quam, quasi, quibusdam quod, reprehenderit repudiandae sapiente sit vitae voluptatum!';
    const blocks = ['Heading1', 'Heading2', 'Heading3'].map((title, i) => {
      return (
        <div className="col-12 mb-4" key={i}>
          <Block title={title} text={text}/>
        </div>
      )
    });

    return (
      <div className="container mt-3">
        <div className="row">
          {blocks}
        </div>
      </div>
    );
  }
}

export default Main;
