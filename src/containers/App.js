import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
      console.log('app here', this.props);
    return (
      <div className="App">
        <Header />
          {this.props.auth.isAuthenticated ? 'Welcome back!' : 'You must login'}
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

App.propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.element
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps
)(App);
