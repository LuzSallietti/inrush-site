import { Link } from "react-router-dom";
import engIcon from '../../assets/images/engineer/eng-icon.svg'
import comIcon from '../../assets/images/commisioning/com-icon.svg'
import testIcon from '../../assets/images/test/test-icon.svg';
import controlIcon from '../../assets/images/control/control-icon.svg';
import './services.scss';

let services_data = [
    { 
        name:"Ingeniería de detalle",
        desc:"Personal técnico especializado en el desarrollo y ejecución integral de proyectos en el campo de la energía eléctrica.",
        icon: engIcon

    },
    { 
        name:"Puesta en servicio",
        desc:"Para sistemas de medición, control y protección en estaciones transformadoras y centrales de generación.",
        icon: comIcon
    },
    { 
        name:"Ensayos eléctricos",
        desc:"Análisis, verificación y diagnóstico de sistemas. Consultoría e inspección in-situ.",
        icon: testIcon
    },
    { 
        name:"Protección y control",
        desc:"Parametrización, diseño de configuración lógica y testeo de los sistemas.",
        icon: controlIcon
    }

]

const Services = () => {
    return <>
    <ul className="content-margin services">
        {services_data.map(({ name , desc, icon }) => {
            return <>
            <li key={name} className="services-list">
                <img src={icon} alt={`${name} ícono`} className="services-list-icon"></img>
                <h3>{name}</h3>
                <p className="w-75 mx-auto">{desc}</p>
                {name ==="Ingeniería de detalle" && <Link to="/servicios/ingenieria">Ver detalle <i className="fas fa-arrow-right"></i></Link>}
                {name ==="Puesta en servicio" && <Link to="/servicios/puesta">Ver detalle <i className="fas fa-arrow-right"></i></Link>}
                {name ==="Ensayos eléctricos" && <Link to="/servicios/ensayos">Ver detalle <i className="fas fa-arrow-right"></i></Link>}
                {name ==="Protección y control" && <Link to="/servicios/proteccion">Ver detalle <i className="fas fa-arrow-right"></i></Link>}                
            </li>
            </>
        })}
    </ul>
    </>
}
export default Services