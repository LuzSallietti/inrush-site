import cyrus from '../../assets/images/cyrus.png'
import edenor from '../../assets/images/edenor.png'
import edvsa from '../../assets/images/edvsa.png'
import elecnor from '../../assets/images/elecnor.png'
import electroingenieria from '../../assets/images/electroingenieria.jpg'
import epec from '../../assets/images/epec.png'
import epen from '../../assets/images/epen.jpg'
import grupoeling from '../../assets/images/grupoeling.png'
import siemens from '../../assets/images/SIEMENS.png'
import tel3pecom from '../../assets/images/tel3pecom.png'
import transcomahue from '../../assets/images/transcomahue.png'
import transener from '../../assets/images/transener.jpg'
import ypf from '../../assets/images/ypf.png'
import ypfluz from '../../assets/images/ypfluz.png'



import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './clients.scss'

const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
};
const items = [
    <div className="item" data-value="3"><img src={siemens} alt="siemens"></img></div>,
    <div className="item" data-value="1"><img src={cyrus} alt="cyrus"></img></div>,
    <div className="item" data-value="2"><img src={edenor} alt="edenor"></img></div>,
    <div className="item" data-value="3"><img src={edvsa} alt="edvsa"></img></div>,
    <div className="item" data-value="4"><img src={elecnor} alt="elecnor"></img></div>,
    <div className="item" data-value="5"><img src={electroingenieria} alt="electroingenieria"></img></div>,
    <div className="item" data-value="5"><img src={epec} alt="epec"></img></div>,
    <div className="item" data-value="1"><img src={epen} alt="epen"></img></div>,
    <div className="item" data-value="2"><img src={grupoeling} alt="grupo eling"></img></div>,    
    <div className="item" data-value="4"><img src={tel3pecom} alt="tel3pecom"></img></div>,
    <div className="item" data-value="5"><img src={transcomahue} alt="transcomahue"></img></div>,
    <div className="item" data-value="5"><img src={transener} alt="transener"></img></div>,
    <div className="item" data-value="5"><img src={ypf} alt="ypf"></img></div>,
    <div className="item" data-value="5"><img src={ypfluz} alt="ypf"></img></div>

];

const Clients = () => {
    return <>
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        animationDuration={2000}
        infinite
        disableButtonsControls={true}
    />
    </>
}

export default Clients