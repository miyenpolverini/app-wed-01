import React, { useEffect } from 'react'
import './ItemIndex.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
/* import videoInvitacion from '../video/videoInvitacion.mp4'; */

const ItemIndex = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div>
            {/* <video className='img-inicio' preload='auto' muted autoPlay src={videoInvitacion}></video> */}

            <img data-aos="zoom-in" className='img-inicio' alt='foto portada' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1662091432/WhatsApp_Image_2022-09-01_at_7.39.05_PM_kxhodz.jpg'></img>
            <div className='img-fondo'></div>

            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" id='formulario-asistencia' className='countdown-portada' uk-countdown="date: 2022-10-21T03:10:16+00:00">
                <div>
                    <div className="uk-countdown-number uk-countdown-days count-det"></div>
                </div>
                <span className='count-coma'>,</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-hours count-det"></div>
                </div>
                <span className='count-puntos'>:</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-minutes count-det"></div>
                </div>
                <span className='count-puntos'>:</span>
                <div>
                    <div className="uk-countdown-number uk-countdown-seconds count-det "></div>
                </div>
            </div>

            {/*     <iframe className='formulario-asistencia' src="https://docs.google.com/forms/d/e/1FAIpQLSduObXdLOEsNOO4aIB_j8a7NDvGRayxiRDYGDh-LtT6fED44A/viewform?embedded=true" title='formu-asistencia' frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> */}

            <h4 className='parrafo2-portada'>CONFIRMAR ASISTENCIA</h4>
            <h6 className='parrafo2-subtit'>Contamos con tu presencia en este día tan especial</h6>
            <a className="social-icons__link" href="https://forms.gle/F17onPWsiJDhppCcA" target="_blank" rel='noreferrer'>
                <button className='botonLlegar'>
                    RSVP<span className='btn-arrow'><IoIosArrowForward /></span>
                </button>
            </a>

            <h4 className='parrafo3-portada'>TE ESPERAMOS EN LA...</h4>
            <div className='parrafo2-div'>
                <div>
                    <h5 className='parrafo2-contenido'>CEREMONIA</h5>
                    <h6 className='parrafo2-contenido2'>Iglesia Nuestra Señora de Fátima</h6>
                    <h6 className='parrafo2-contenido3'>18hs</h6>
                    <Link to={'/infoEvento'}>
                        <button className='botonLlegar'>
                            Como llegar<span className='btn-arrow'><IoIosArrowForward /></span>
                        </button>
                    </Link>
                </div>
                <div>
                    <h5 className='parrafo2-contenido-fiesta'>FIESTA</h5>
                    <h6 className='parrafo2-contenido2'>Janos Hurlingham</h6>
                    <h6 className='parrafo2-contenido3'>20hs</h6>
                    <HashLink to={'/infoEvento/#evento-fiesta'}>
                        <button className='botonLlegar'>
                            Como llegar<span className='btn-arrow'><IoIosArrowForward /></span>
                        </button>
                    </HashLink>
                </div>
            </div>
            <div className='parrafo-portada'>
                <h6>Si queres regalarnos algo más que tu presencia en esta fecha...</h6>
                <Link to={'/regalos'}>
                    <button className='botonIrRegalo'>Hacé click acá</button>
                </Link>
            </div>
            <video className='video-portada' preload='auto' muted loop autoPlay src='https://video.wixstatic.com/video/11062b_7488edba38234bd69b0603ad498efdf5/720p/mp4/file.mp4'></video>
            <h5 className='tit-final'>¡Estamos muy contentos de poder compartir este día tan importante con ustedes!</h5>
            <div className='img-final-contenido'>
                <img data-aos="zoom-in" className='img-final' alt='foto nosotros' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1661126675/WhatsApp_Image_2022-08-21_at_8.58.28_PM_dzltro.jpg'></img>
            </div>
            {/* <img className='img-final' alt='foto final' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1648488802/Flu_miyo_na7vzr.png'></img> */}
        </div>
    )
}

export default ItemIndex
