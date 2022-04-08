import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import image1 from './images/medico1.jpg'

const App = () => {
    //variable [ REACT_APP_nomeDaFoto = "/medico2.jpg" ] in dotenv
    const primeiroCSS = () =>{    
        return ({
            backgroundColor: '#EEE',
            border: '1px solid',
            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'verdana',
            width: '100%',
            height: '100%',
            padding: '5px'
        })
    }
    const nomes = {
        primeiroMedico: "José da Silva",
        segundoMedico: "Maria da Silva",
        terceiroMedico: "Jaqueline Mendes"
    }
    return (
        <div style={primeiroCSS()}>
            <h3>Profissionais de saúde</h3>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 'auto', width: '97%', backgroundColor: '#EEE', padding: 12, border: '1px solid', borderColor: '#DDD', borderRadius: 5}}>
                <div class="cardBox"><img src={image1}/><p>{nomes.primeiroMedico}</p></div>
                <div class="cardBox"><img src={process.env.REACT_APP_nomeDaFoto}/><p>{nomes.segundoMedico}</p></div>
                <div class="cardBox"><img src="https://st2.depositphotos.com/1005647/6476/i/600/depositphotos_64760823-stock-photo-mad-doctor-with-a-stethoscope.jpg"/><p>{nomes.terceiroMedico}</p></div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    //document.getElementById("root")
    document.querySelector("#root")
)