import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Work} from '@material-ui/icons';
import { isMobile } from 'react-device-detect';
export default function Experience() {
    return (
        <div className="App">
            <h1 style={{color: "#36498f"}}>Experiencia laboral</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#343A40', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Septiembre de 2018 - Diciembre de 2018"
                    dateClassName={isMobile ? "tl-date-mobile" : "tl-date"}
                    iconStyle={{ background: '#343A40', color: '#fff' }}
                    icon={<Work/>}
                >
                    <h5>Desarrollador en prácticas</h5>
                    <h6>Ekinbe S.L.</h6>
                    <h6>Desarrollo de Saltzen, una plataforma que sirve de escaparate para que pequeños comercios puedan hacer frente a sus competidores online</h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#343A40', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Agosto de 2019 - Septiembre de 2020"
                    dateClassName={isMobile ? "tl-date-mobile" : "tl-date"}
                    iconStyle={{ background: '#343A40', color: '#fff' }}
                    icon={<Work/>}
                >
                    <h5>Desarrollador Web</h5>
                    <h6>Ekinbe S.L.</h6>
                    <h6>Desarrollo de múltiples proyectos en NodeJS, Spring Boot, React o la plataforma Openbravo, entre otros</h6>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
