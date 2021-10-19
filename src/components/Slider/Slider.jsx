import './slider.scss'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import portada from '../../assets/images/portada.jpg'
import portadaSM from '../../assets/images/portada-mobile.jpg';
import logosomos from '../../assets/images/logo-somos.png'


const Slider = () => {
    return <>
    <Container fluid className="position-relative slider">
        <Row className="p-0 slider-img">
            <div className="img-filter"></div>
            <picture>
                <source media="(max-width:768px)" srcset={portada}></source>                
                <img src={portada} alt="torres electricas de alta tension"></img>
            </picture>
        </Row>
        <div className="slider-intro" id="sliderIntro">                
            <div className="slider-intro-logo"><img src={logosomos} alt="logo" className="w-100 h-auto"></img></div>
            <h3>Profesionalismo y experiencia<br></br>en servicios de Ingeniería.</h3>
            <a href="/#novedades" className="slider-intro-btn">Ver novedades</a>
        </div>            
    </Container>
    </>
}
export default Slider