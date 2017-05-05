import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  render() {
    console.log('hello brandon :)');
    return (
      <section className="container">
        <div>
          <p>
            Test Home Page
          </p>
        </div>
      </section>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Home;
