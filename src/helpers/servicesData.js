import ingfoto1 from '../assets/images/engineer/foto1.jpg'
import ingfoto2 from '../assets/images/engineer/foto2.JPG'
import ingfoto3 from '../assets/images/engineer/foto3.JPG'
import ingfoto4 from '../assets/images/engineer/foto4.JPG'
import comfoto1 from '../assets/images/commisioning/com-foto1.jpg'
import comfoto2 from '../assets/images/commisioning/com-foto2.jpg'
import comfoto3 from '../assets/images/commisioning/com-foto3.jpg'
import comfoto4 from '../assets/images/commisioning/com-foto4.jpg'
import testfoto1 from '../assets/images/test/test-foto1.jpg'
import testfoto2 from '../assets/images/test/test-foto2.jpg'
import testfoto3 from '../assets/images/test/test-foto3.jpg'
import testfoto4 from '../assets/images/test/test-foto4.jpg'
import controlfoto1 from '../assets/images/control/control-foto1.jpg'
import controlfoto2 from '../assets/images/control/control-foto2.jpg'
import controlfoto3 from '../assets/images/control/control-foto3.jpg'
import controlfoto4 from '../assets/images/control/control-foto4.jpg'



let engineer_data= 
    {
        name:"Ingeniería de detalle",
        desc:"El personal técnico de Inrush Ingeniería se ha especializado en el campo de la Energía Eléctrica, gestionando la ejecución de proyectos integrales, ubicando a dichas personas en un lugar de reconocimiento por parte de las empresas que actúan en el mercado de la energía. Las áreas de especialización cubren trabajos en Extra Alta y Alta Tensión de Líneas de Transmisión de Energía, Estaciones Transformadoras y Centrales de Generación, contando también con amplios antecedentes en Media y Baja Tensión. Los servicios ofrecidos cubren las diferentes fases de los proyectos ejecutivos, desde el estudio técnico-económico de un pliego licitatorio, pasando por la ingeniería base de anteproyecto hasta la ingeniería de detalle con una alta capacidad para la gestión, coordinación y supervisión de los proyectos.",
        images:[ingfoto1, ingfoto2, ingfoto3, ingfoto4],
        next: "/servicios/puesta",
        prev: "/servicios/proteccion"
    }
let commissioning = {
        name:"Puesta en servicio",
        desc:"Con el objetivo de brindar la conformidad y confiabilidad del correcto funcionamiento de las instalaciones, contamos con el personal técnico capacitado y los equipos necesarios para realizar las funciones de la puesta en funcionamiento de los sistemas de medición, control y protección que componen las estaciones transformadoras y centrales de generación. Brindando una solución en la ejecución, coordinación y gestión de las tareas de pre-commissioning como commissioning.",
        images:[comfoto1, comfoto2, comfoto3, comfoto4],
        next: "/servicios/ensayos",
        prev: "/servicios/ingenieria"
}
let test = {
    name:"Ensayos eléctricos",
    desc:"Entendiendo que los activos que conforman un sistema eléctrico constituyen un factor primordial y deben operar en forma confiable y eficiente, ofrecemos servicios de análisis, verificación y diagnóstico del estado de ellos y los sistemas que lo componen.Brindamos consultoría, inspección y ensayos in-situ, mediante mediciones eléctricas para el análisis de falla en todo tipo de sistemas eléctricos, logrando brindar a nuestros clientes la información necesaria para la correcta toma de medidas preventivas en sus áreas de mantenimiento y recepción de la instalación.",
    images:[testfoto1, testfoto2, testfoto3, testfoto4],
    next: "/servicios/proteccion",
    prev: "/servicios/puesta"
}
let control = {
    name:"Protección y control",
    desc:"Entendemos que con el correr del tiempo, cada vez son más los sistemas eléctricos que utilizan la fiabilidad que aportan los IED (Intelligent Electronic Device). Es por esto que nuestro personal se encuentra capacitado para realizar tareas de parametrización, diseño de la configuración lógica y pruebas necesarias para verificar el correcto funcionamiento de los sistemas de control y protección.   Brindamos servicios de auditoría de proyectos eléctricos de protecciones, ingeniería básica y de detalle, ensayos y puesta en servicio de relés de protección, de control, RTU y SCADA.",
    images:[controlfoto1, controlfoto2, controlfoto3, controlfoto4],
    next: "/servicios/ingenieria",
    prev: "/servicios/ensayos"
}
export {engineer_data as default,commissioning, test, control }