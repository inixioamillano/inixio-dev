import React from 'react'
import {isMobile} from 'react-device-detect';
export default function Home() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}>
                <div className="card card-block App" style={isMobile ? {marginLeft: "5%", marginRight: "5%"}:{}}>
                    <h1><div style={{color: "#36498f", display: "inline"}}>Inixio</div> Amillano Casteig</h1>
                    <h6> Calle Zelai, nº 38 · Altsasu, Navarra, CP 31800 · (+34) 629 94 20 75 · <a href="mailto:inixio97@gmail.com">inixio97@gmail.com</a></h6>
                    <p>Soy un desarrollador web junior con experiencia tanto en front-end como en back-end con ganas de ampliar mis conocimientos, además de adquirir nuevos y mantenerme actualizado en un sector que cambia constantemente</p>
                </div>
        </div>
    )
}
