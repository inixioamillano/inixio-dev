import React from 'react'
import { Card } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { isMobile } from 'react-device-detect';
export default function Skill(props) {
    const {name, icons, experience, description} = props;
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%"
          }}>
            <Card>
            <Card.Body>
                {icons.map(icon => <i style={{margin: 2.5, fontSize: 32}} className={icon}></i>)}
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Rating value={experience} readOnly precision={0.5}/>
            </Card.Body>
            </Card>
        </div>
    )
}
