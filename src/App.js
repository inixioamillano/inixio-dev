import React from 'react';
import { Nav, Container, Col, Row, Button, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Fab from '@material-ui/core/Fab';
import StarfieldAnimation from 'react-starfield-animation'
import Education from './screens/Education';
import Skills from './screens/Skills';
import {isMobile} from 'react-device-detect';
import Experience from './screens/Experience';
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <Nav className="d-none d-md-block bg-light allign-middle sidenav bg-dark" style={{height: "100vh", width: "25vh"}}>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '95vh'
              }}
            />
              <div style={{position: "absolute", top: "25%"}}>
                <img src="profile.jpg" className="circular-image" style={{width:"126px", height:"126px", margin: 15}}></img>
                <Nav.Link style={{width: "25vh"}} className="bg-dark" href="#home">Sobre mí</Nav.Link>
                <Nav.Link style={{width: "25vh"}} className="bg-dark" href="#education">Educación</Nav.Link>
                <Nav.Link style={{width: "25vh"}} className="bg-dark" href="#skills">Habilidades</Nav.Link>
                <Nav.Link style={{width: "25vh"}} className="bg-dark" href="#experience">Experiencia</Nav.Link>
              </div>
              <div id="container" style={{position: "absolute", bottom: 10}}>
                <div id="space-around">
                  <Fab className="linkedin" style={{margin: 8}} href="https://www.linkedin.com/in/inixio-amillano-casteig/" size="medium">
                    <i class="fa fa-linkedin"></i>
                  </Fab>
                  <Fab className="git" style={{margin: 8}} href="https://github.com/inixioamillano" size="medium">
                    <i class="fa fa-git"></i>
                  </Fab>
                </div>
              </div>
            </Nav>      
          </Col>
          <Col md={10} sm={12} style={{margin: 0, padding: 0}}>
            <div style={{height: "100vh", width: "100%"}}>
              <div id="home">
                <Home/>
              </div>  
            </div>
            <div style={isMobile ? {} : {height: "100vh"}}>
              <div id="education">
                <Education/>
              </div>
            </div>
            <div style={isMobile ? {} : {height: "100vh"}}>
              <div id="skills">
                <Skills/>
              </div>
            </div>
            <div>
              <div id="experience">
                <Experience/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark" style={{bottom: 0, height: "20vh"}}>
              <div class="footer text-center">Sitio desarrollado íntegramente por mí. ¡Echa un vistazo al código <a href="https://github.com/inixioamillano/inixioamillano.github.io" target="blank">aquí</a>!</div>
              <div class="footer footer-copyright text-center py-3">© 2020 Copyright: Inixio Amillano Casteig
              </div>
          </footer>
    </div>
  );
}

export default App;
