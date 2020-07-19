import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {School} from '@material-ui/icons'
import { isMobile } from 'react-device-detect';
export default function Education() {
    return (
        <div className="App">
            <h1 style={{color: "#36498f"}}>Educación</h1>
            <VerticalTimeline style={{color: 'red'}}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#343A40', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Septiembre de 2015 - Diciembre de 2018"
                    dateClassName={isMobile ? "tl-date-mobile" : "tl-date"}
                    iconStyle={{ background: '#343A40', color: '#fff' }}
                    icon={<School/>}
                >
                    <h5>Ingeniería Informática</h5>
                    <h6>Universidad Pública de Navarra</h6>
                    <h6>Especialización en Tecnologías de la Información</h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#343A40', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Febrero de 2019 - Julio de 2019"
                    dateClassName={isMobile ? "tl-date-mobile" : "tl-date"}
                    iconStyle={{ background: '#343A40', color: '#fff' }}
                    icon={<School/>}
                >
                    <h5>Computer Science Engineering</h5>
                    <h6>Lodz University of Technology (Polonia)</h6>
                    <h6>Programa Erasmus</h6>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
