import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem, Image, Grid, Row, Col } from 'react-bootstrap';
import Hasura from './assets/hasura.png';
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

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar style = {{ background: `#38445a`, borderRadius: `0px` }}  inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" style={{ 'paddingTop': '23px' }}>Todo App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem eventKey={1}>
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="success"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'home')}
                    >
                      Home
            </Button>
                  )
                }

              </NavItem>
              <NavItem eventKey={2} href="#">
                {
                  !isAuthenticated() && (
                    <Button
                      bsStyle="info"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                  </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="danger"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                  </Button>
                  )
                }
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
          !isAuthenticated() && (
            <div className="container">
              <Grid>
                <Row>
                  <Col md={2} mdPush={4}>
                  <Image src={Hasura} style={{ margin: `20px` }} responsive />
                   
                    <Button
                      bsStyle="info"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                      style={{ position: "relative", left: `2.5em` }}
                    >
                      Sign In / Sign Up
                  </Button>
                  </Col>
                </Row>
              </Grid>
            </div>
          )
        }
      </div>

    );
  }
}

export default App;
