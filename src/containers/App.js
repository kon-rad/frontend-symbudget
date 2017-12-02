import React, { Component } from 'react';
import '../styles/App.css';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
// import  'font-awesome/css/font-awesome.css';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
      console.log('app here', this.props);
    return (
      <div className="App">
          <NavBar
              auth={this.props.auth}
          />
            {this.props.children}
          <Footer />
      </div>
    );
  }
}

App.propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.array
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps
)(App);
