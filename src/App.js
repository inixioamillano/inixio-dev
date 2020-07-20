import React from 'react';
import { Nav, Container, Col, Row, Button, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Fab from '@material-ui/core/Fab';
import StarfieldAnimation from 'react-starfield-animation'
import Education from './screens/Education';
import Skills from './screens/Skills';
import {isMobile, isIOS} from 'react-device-detect';
import Experience from './screens/Experience';
function App() {
  return (
    <div>
      {/**<Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="bg-dark" href="#home">Sobre mí</Nav.Link>
            <Nav.Link dataToggle="collapse" className="bg-dark" href="#education">Educación</Nav.Link>
            <Nav.Link className="bg-dark" href="#skills">Habilidades</Nav.Link>
            <Nav.Link className="bg-dark" href="#experience">Experiencia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>*/}
      <Container style={{marginTop: isMobile ? 30 : 0}}>
        <Row style={{marginTop: isMobile ? 30 : 0}}>
          <Col md={2} style={{width: "25vh"}}>
            <Nav className="d-none d-md-block bg-light allign-middle sidenav bg-dark">
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '95%'
              }}
            />
              <div style={{position: "absolute", top: "25%", width: "100%"}}>
                <Nav.Link className="bg-dark" href="#home">Sobre mí</Nav.Link>
                <Nav.Link className="bg-dark" href="#education">Educación</Nav.Link>
                <Nav.Link className="bg-dark" href="#skills">Habilidades</Nav.Link>
                <Nav.Link className="bg-dark" href="#experience">Experiencia</Nav.Link>
              </div>
              <div id="container" style={{position: "absolute", bottom: 10}}>
                <div id="space-around">
                  <Fab className="linkedin" style={{margin: 2}} href="https://www.linkedin.com/in/inixio-amillano-casteig/" size="medium">
                    <i class="fa fa-linkedin"></i>
                  </Fab>
                  <Fab className="git" style={{margin: 2}} href="https://github.com/inixioamillano" size="medium">
                    <i class="fa fa-git"></i>
                  </Fab>
                  <Fab className="twitter" style={{margin: 2}} href="https://github.com/inixioamillano" size="medium" disabled>
                    <i class="fa fa-twitter"></i>
                  </Fab>
                </div>
              </div>
            </Nav>
          </Col>
          <Col md={10} sm={12} style={{width: "75vh"}}>
            <div>
              <div id="home">
                <Home/>
              </div>  
            </div>
            <hr/>
            <div>
              <div id="education">
                <Education/>
              </div>
            </div>
            <hr/>
            <div>
              <div id="skills">
                <Skills/>
              </div>
            </div>
            <hr/>
            <div>
              <div id="experience">
                <Experience/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark" style={{bottom: 0, paddingLeft: isMobile ?  "0" : "25%"}}>
              {isMobile && <div className="App">
                <Fab className="linkedin" style={{margin: 10}} href="https://www.linkedin.com/in/inixio-amillano-casteig/" size="medium">
                    <i class="fa fa-linkedin"></i>
                  </Fab>
                  <Fab className="git" style={{margin: 10}} href="https://github.com/inixioamillano" size="medium">
                    <i class="fa fa-git"></i>
                  </Fab>
                  <Fab className="twitter" style={{margin: 10}} href="https://github.com/inixioamillano" size="medium" disabled>
                    <i class="fa fa-twitter"></i>
                  </Fab>
              </div>}
              <div class="footer text-center">Sitio desarrollado íntegramente por mí. ¡Echa un vistazo al código <a href="https://github.com/inixioamillano/inixioamillano.github.io" target="blank">aquí</a>!</div>
              <div class="footer footer-copyright text-center py-3">© 2020 Copyright: Inixio Amillano Casteig
              </div>
          </footer>
    </div>
  );
}

export default App;
