import React from "react";
import "./SobrePage.css"

function SobrePage(){
    const logUrl = "https://www.iteris.com.br/Iteris.Site.Cms.Theme/img/logo.svg";
    const titulo = "Sobre a Iteris"
    const descricao = "Somos uma empresa de tec"

    return (
        <div>
            <div className="sobre-page">
                <img src={logUrl} alt={titulo}/>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default SobrePage