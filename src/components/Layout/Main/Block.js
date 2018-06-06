import React, {Component, Fragment} from 'react';

class Block extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur,
          corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis
          quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error
          et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo
          quos rem saepe suscipit tempore temporibus voluptatem. Animi blanditiis commodi cupiditate dolor
          dolorem, enim eum laboriosam molestiae nobis non placeat porro quae qui, quidem sit tenetur veritatis
          voluptatibus? Accusamus doloremque doloribus ducimus provident quam, quasi, quibusdam quod,
          reprehenderit repudiandae sapiente sit vitae voluptatum!</p>
        <button className='btn btn-info'>More info</button>
      </Fragment>
    );
  }
}

export default Block;
