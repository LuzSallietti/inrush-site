import './slider.scss'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import portada from '../../assets/images/portada.jpg'
import logoSVG from '../../assets/images/logo-somos.svg'


const Slider = () => {
    return <>
    <Container fluid className="position-relative slider">
        <Row className="p-0 slider-img">
            <div className="img-filter"></div>                                          
            <img src={portada} alt="torres electricas de alta tension"></img>            
        </Row>
        <div className="slider-intro" id="sliderIntro">                
            <div className="slider-intro-logo"><img src={logoSVG} alt="logo" className="w-100 h-auto"></img></div>
            <h1>Profesionalismo y experiencia<br></br>en servicios de Ingeniería.</h1>
            <a href="/#novedades" className="slider-intro-btn">Ver novedades</a>
        </div>            
    </Container>
    </>
}
export default Slider