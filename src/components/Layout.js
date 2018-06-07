import React, {Component, Fragment} from 'react';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

class Layout extends Component {
  constructor() {
    super();
    this.state = {'title': 'Welcome to React'};
  }

  setTitle() {
    setTimeout(() => this.setState({'title': 'Welcome to React New'}), 1000);
  }

  changeTitle(title) {
    this.setState({'title': title});
  }

  render() {
    const sectionStyle = {
      marginTop: "30px",
      marginBottom: "20px"
    };
    return (
      <Fragment>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
        <section className='main' style={sectionStyle}>
          {this.props.children}
        </section>
        <Footer/>
      </Fragment>
    );
  }
}

export default Layout;
