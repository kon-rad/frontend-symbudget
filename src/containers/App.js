import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
      console.log('app here', this.props);
    return (
      <div className="App">
          <NavBar
              auth={this.props.auth}
          />
          <Container className="content-wrapper">
              <Row>
                  {this.props.children}
              </Row>
          </Container>
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
