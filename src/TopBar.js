import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">GitHub</NavItem>
                <NavItem eventKey={2} href="http://react-bootstrap.github.io/components.html">React Bootstrap Docs</NavItem>                
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default TopBar;