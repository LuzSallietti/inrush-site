import news1 from '../../assets/images/news/news1.jpg'
import news2 from '../../assets/images/news/news2.png'
import news3 from '../../assets/images/news/news3.jpg'
import news4 from '../../assets/images/news/news4.jpg'

import './novedades.scss'

let articles_db = [
    {
        id: 1,
        main_img: news1,
        title:"Ensayos de mantenimiento de sistemas de protección de transformadores y generador TG11 en Central Bicentenario",
        preview:"En septiembre de 2021 realizamos las tareas de mantenimiento de los sistemas de protecciones del transformador elevador, transformador de SSAA y generador de189 MVA, todos asociados a la turbina de gas TG11.",
        link:"https://www.linkedin.com/company/inrush/posts/"
    },
    {
        id: 2,
        main_img: news2,
        title:"PES ETZN 132 kV – PES ETCO 132 kV y ETCAOL 66/33 kV",
        preview:"En junio de 2021 se finalizó la etapa de puesta en servicio del proyecto que involucraba a un campo de línea de 132 kV en la ETZN perteneciente a TRANSENER, un campo de acometida de transformador de 132 kV en la ET CO perteneciente a TRANSPA S.A. y 2 campos de salida de línea en 66 kV en la ET CAOL pertenecientes a SERVICIOS PUBLICOS S.E.",
        link:"https://www.linkedin.com/posts/inrush_sadi-maersenergaeda-proyectofinalizado-activity-6815654461877346304-_ajU"
    },
    {
        id: 3,
        main_img: news3,
        title:"Ensayos SAT tablero de control y comunicación SET PTA Chus y ampliación ET Chus",
        preview:"Durante el mes de agosto de 2021 concluimos con éxito los ensayos de aceptación en fábrica (FAT) de los tableros que componen el sistema de Comunicación y Control de la nueva SET PTA Chus y ampliación de la ET Chus.",
        link:"https://www.linkedin.com/posts/inrush_tableros-sistema-de-comunicaci%C3%B3n-y-control-activity-6835692004551204864-gfV2"
    },
    {
        id: 4,
        main_img: news4,
        title:"Puesta en servicio ET Colonia Valentina",
        preview:"En agosto de 2021 estuvimos realizando diversas tareas para lograr la energización de la ET Colonia Valentina 132/33/13,2 kV provincia de Neuquén.",
        link:"https://www.linkedin.com/posts/inrush_d60-f650-ref615-activity-6838542314172952576-PEJb"
    }
]


const Novedades = () => {
    return <>
    <section className="content-margin novedades" id="novedades" data-aos="fade-up" data-aos-duration="1500">
        <h1>Novedades</h1>
        <h4>Conocé nuestros proyectos recientes</h4>
        <div className="novedades-container">
            {articles_db.map(( {id, main_img, title, preview, link }) => {
                return <>
                <article key={id} className="novedades-article">
                    <div className="novedades-body">
                        <div className="novedades-img">
                            <img src={main_img} alt={title}></img>
                        </div>                    
                            <h3>{title}</h3>
                            <p>{preview.length > 200 ? 
                            `${preview.slice(0,200)}...`:
                            preview}</p>                        
                    </div>
                    <a href={link}>Leer más <i className="fas fa-arrow-right"></i></a>
                </article>
                </>
            })}
        </div>
    </section>
    </>
}

export default Novedades