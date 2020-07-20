import React from 'react'
import Skill from '../components/Skill'
import {Container, Row, Col} from 'react-bootstrap';
export default function Skills() {
    return (
        <div className="App">
            <h1 style={{color: "#36498f", display: "inline"}}>Habilidades</h1>
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Desarrollo Web" 
                            description="Desarrollo web mediante HTML 5, CSS 3 y JavaScript/TypeScript" 
                            experience={4.5} 
                            icons={["devicon-html5-plain-wordmark colored", "devicon-css3-plain-wordmark colored", "devicon-javascript-plain colored", "devicon-typescript-plain colored"]}/>
                    </Col>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Desarrollo Full Stack" 
                            description="Desarrollo de aplicaciones web sobre la pila MERN" 
                            experience={4} 
                            icons={["devicon-mongodb-plain colored", "devicon-express-original colored", "devicon-react-original colored", "devicon-nodejs-plain colored"]}/>
                    </Col>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Desarrollo API REST" 
                            description="Desarrollo de APIs para consumición de datos tanto en NodeJS como en Spring Boot" 
                            experience={4} 
                            icons={["devicon-nodejs-plain colored", "fa fa-database", "devicon-java-plain-wordmark colored"]}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Desarrollo Móvil" 
                            description="Desarrollo de aplicaciones móviles tanto para Android (Java, Kotlin o React Native) como para iOS (React Native), además de PWAs multiplataforma" 
                            experience={3.5} 
                            icons={["devicon-android-plain colored", "devicon-react-original colored", "devicon-apple-plain colored"]}/>
                    </Col>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Gestión y despliege de sistemas" 
                            description="Gestión de sistemas mediante herramientas como Docker o Nginx además de automitización de tareas para asegurar una integración continua utilizando Jenkins" 
                            experience={3} 
                            icons={["devicon-docker-plain colored", "fa fa-server", "devicon-nginx-original colored"]}/>
                    </Col>
                    <Col md={4} sm={12}>
                        <Skill 
                            name="Otros" 
                            description="Nociones básicas de lenguajes y frameworks en los que continúo formándome" 
                            experience={2.5} 
                            icons={["devicon-angularjs-plain colored", "fa fa-graduation-cap", "devicon-csharp-plain colored"]}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
