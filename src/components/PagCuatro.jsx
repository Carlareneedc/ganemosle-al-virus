import React, { Fragment } from 'react'
import '../style/PagCuatro.css'
import puma from '../img/pumaEscudo.png'
import corona from '../img/coronaVerde.png'
import Header from '../components/Header'
import mascara from '../img/mascara.png'
import jabon from '../img/jabon.png'
import Footer from '../components/Footer'
import HeaderCel from '../components/HeaderCel'
import {Link} from "react-router-dom";
import Boton from './Boton'

function PagCuatro() {
    return (
        <Fragment>
            <div className="d-none d-sm-block"><Header /></div>
            <div className="d-lg-none d-sm-block"><HeaderCel /></div>
            <div className="d-none d-sm-block"><Boton/></div>
            <div className="container">
                <div className="instrucciones row">
                    <div className="bloqueCeleste .col- col-xs-12 col-md-5  d-flex flex-column align-items-center">

                        <div className="encabezado">
                            <div className="masc"><img src={mascara} className="mascarilla"></img></div>
                            <div className="tomask">

                                ¡Hola! Soy <span className="toMask">To-mask.</span>
                                <br></br>
                            Te vengo a mostrar formas para detener el coronavirus
                            </div>
                        </div>
                        <p className="lavate"> Lávate las manos</p>
                        <div> Usa agua y jabón, haz espuma. Hazlo durante 20
                        segundos y asegúrate de lavar ambos lados de las
                              manos y entre los dedos.</div>
                        <p className="cubrete"> Cúbrete bien</p>
                        <div className="altoser">Al toser y estornudar tapa tu boca con el brazo. </div>
                        <p className="seobediente">Se obediente a las indicaciones de tus padres  </p>
                        <div className="nodes">No des abrazos, besos, ni te acerques a los demas.
                                   La distancia nos mantiene seguros. </div>
                        <p className="usa">Usa una mascarilla</p>
                        <div className="siempre">Siempre que salgas de casa usa tu mascarilla
                            tapando nariz y boca. ¡Disfrazarnos es genial!  </div>
                        <div className="divertido"> ¡Siempre es divertido arrastrar los gérmenes con agua y jabón!
                        <div className="masc"><img src={jabon} className="jabon"></img></div>
                        </div>
                    </div>
                    <div className="juegos col-sm-12 col-md-5  d-flex flex-column align-items-center">

                        <div className="bloqueMorado justify-content-center">
                            <div className="pumaEspumas">
                                <img className="iconoPuma" src={puma} width="100" />
                            </div>
                            <div className="prevencion">
                                <p className="demuestra" > Demuestra si eres un guerrero del Escuadrón Prevención </p>
                            </div>

                            <div className="textJugar">
                            <Link className="aJugar" to="./juego">!A JUGAR!</Link>
                            </div>

                        </div>
                        <div className="w-100"> </div>
                        <div className="bloqueCorona justify-content-center">
                            <div className="imCorona">
                                <img className="iconoVerde" src={corona} width="100"></img>
                            </div>
                            <div className="parrafoDos">
                                <p className="protegerte">¿Y tú,puedes protegerte de mi ?
                        Gana este desafío y demuestralo</p>
                            </div>
                            <div className="vamosDos">
                                <Link className="aJugarDos" to="./quiz">!A JUGAR! </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </Fragment>
    )
}

export default PagCuatro
