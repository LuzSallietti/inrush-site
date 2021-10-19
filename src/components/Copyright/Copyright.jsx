import './copyright.scss'
import logofooter from '../../assets/images/logofooter.png'

const Copyright = () => {
    return <>
    <nav className="copyright content-margin">
        <div className="copyrigth-info">
            <p className="fw-bolder">© Inrush Servicios de Ingeniería</p>
            <p>Desarrollado por <a href="https://linkedin.com/in/luzsallietti">M. Luz Sallietti</a></p>
        </div>
        <div className="copyright-logo">
            <img src={logofooter} alt="logo"></img>
        </div>
        <ul>
            <li><a href="https://www.instagram.com/inrush_ingenieria/"><i className="fab fa-instagram px-1"></i></a></li>
            <li><a href="https://www.linkedin.com/company/inrush"><i className="fab fa-linkedin-in px-1"></i></a></li>
        </ul>
    </nav>
    </>
}

export default Copyright