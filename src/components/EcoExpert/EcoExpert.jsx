import ecoexpert from '../../assets/images/ecoexpert.png'
import './ecoexpert.scss'

const EcoExpert = () => {
    return<>
    <article className="ecoexpert" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1500">
        <div className="ecoexpert-img">
            <img src={ecoexpert} alt="logo ecoExpert"></img>
        </div>
        <div className="ecoexpert-info">
            <p>Gracias a nuestra experiencia en el rubro, hemos logrado formar parte del sistema de socios de Schneider Electric en el programa EcoXpert, en el sector Substation Automation.
            Este programa nos avala como representantes de sus productos en lo relacionado a la MT y AT, como ser las RTU Saitel.
            </p>
            <a href="mailto:ecoxpert@inrush.com.ar?Subject=Consulta%20Eco%20Expert" className="ecoexpert-info-btn">Más info <i className="far fa-envelope"></i></a>
        </div>
    </article>
    </>
}
export default EcoExpert