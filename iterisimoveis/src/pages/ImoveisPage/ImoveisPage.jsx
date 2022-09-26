import React, {useEffect, useState} from "react"

import { getImoveis } from "../../services/imovelApiService"
import ImovelCard from "../../components/ImovelCard/ImovelCard"
import "./ImoveisPage.css"
import { useNavigate } from "react-router-dom"

function ImoveisPage(){
    const navigate = useNavigate()
    const [listaImoveis, setListaImoveis] = useState([])

    useEffect(() => {
        getImoveis().then((data) => {
            setListaImoveis(data);
        })
    }, [])
 
    function irParaDetalhe(id){
        navigate(`/imoveis/${id}`)
    }
    

    return (
        <div className="listaImoveis">
            <h1>Página de Imóveis</h1>
        <div>
            {listaImoveis.map((item, i) => 
            <div key={i} onClick={() => irParaDetalhe(item.id)} className="listaImoveis__imovelCard">
                <ImovelCard imovel={item}/></div>
            
            )}
            </div>
        </div>
    )
}

export default ImoveisPage;