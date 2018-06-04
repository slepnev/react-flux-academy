import React, {Component, Fragment} from 'react';
import '../styles/App.scss';
import {hot} from "react-hot-loader";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  constructor(){
    super();
    this.state = {'title': 'Welcome to React'};
  }

  setTitle(){
    setTimeout(() => this.setState({'title': 'Welcome to React New'}), 1000);
  }

  changeTitle(title){
    this.setState({'title': title});
  }

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
        <section className='main'>
          <div className="container mt-3">
            <div className="row">
              <div className="col-6">
                <h2>Heading1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda at consequatur, corporis cupiditate dolorem, ex illum inventore itaque laborum molestias nam nulla officia, omnis quaerat ratione sed sequi soluta tempore. Ab ad, aliquid atque consectetur cumque doloremque enim error et ex fugiat hic incidunt inventore ipsa ipsam iste libero nulla provident quaerat quia quisquam quo quos rem saepe suscipit tempore temporibus voluptatem. Animi blanditiis commodi cupiditate dolor dolorem, enim eum laboriosam molestiae nobis non placeat porro quae qui, quidem sit tenetur veritatis voluptatibus? Accusamus doloremque doloribus ducimus provident quam, quasi, quibusdam quod, reprehenderit repudiandae sapiente sit vitae voluptatum!</p>
              </div>
              <div className="col-6">
                <h2>Hadeing2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab inventore laboriosam nisi officia repudiandae temporibus, tenetur voluptate voluptates? Dolore nostrum quia velit! Accusamus alias aliquid aperiam, assumenda atque blanditiis consequatur consequuntur dignissimos distinctio doloremque dolores eius eos est eveniet ex incidunt ipsa itaque labore laboriosam magni mollitia neque nisi numquam omnis, perspiciatis quod quos rem saepe similique sunt suscipit totam unde vel veritatis voluptas voluptatibus voluptatum. Accusamus alias, aut consequuntur dolor doloribus in inventore minima quae repellendus voluptatum. Consequatur doloremque dolorum magni nemo perspiciatis quisquam sapiente. At consequatur doloremque eos nisi quisquam sunt. Ab fugit harum illo quis ut voluptatem.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default hot(module)(App);
