import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './App.css';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      
        <div>
          <Navbar fluid>
            <Navbar.Header>
            <Grid>
              <Row>
                <Col md={4}>
                  <Navbar.Brand>
                    <a href="#">Auth0 - React</a>
                  </Navbar.Brand>
                </Col>
              {/* <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button> */}
              {
                !isAuthenticated() && (
                  <Col md={4}>
                    <Button
                      id="qsLoginBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                  </Col>   
                  )
              }
              </Row> 
              {
                isAuthenticated() && (
                    <Button
                      id="qsLogoutBtn"
                      bsStyle="danger"
                      className="btn-margin logout"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
              }
             </Grid>   
            </Navbar.Header>
          </Navbar>
          {/* add component for home page details */}
        </div> 

    );
  }
}

export default App;
