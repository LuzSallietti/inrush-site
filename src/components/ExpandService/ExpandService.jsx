import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menú';
import Carousel from 'react-bootstrap/Carousel';
import './expandService.scss';



const ExpandService = (props) => {
    useEffect(() => {
    service.current.classList.add("expandService-container-animation")  
    });
    const service = useRef()
    let {name, desc, images, next, prev} = props.data;
    let text = desc.split(".")    

    return <>
    <Menu/>
    <article className="container-fluid expandService">        
        <div className="expandService-container content-margin" ref={service}>
            <Link to="/" className="expandservice-container-close"><i className="fas fa-times"></i></Link>
            <Carousel fade className="expandService-img" variant="dark">
                {images.map((oneImage, i) => {
                    return <Carousel.Item key={i}>
                    <img className="carousel-img"
                    src={oneImage}
                    alt={`foto-${i}`}
                    />
                </Carousel.Item> 
                })}                               
            </Carousel>            
            <div className="expandService-info">
                <h1>{name}</h1>
                {text.map((oneParagraph, i) => {
                    if (oneParagraph.length>1) {
                    return <p key={i}>{`${oneParagraph}.`}</p>
                    }
                })}
                <div className="expandService-info-controls">
                    <div><Link to={prev} onClick={()=> service.current.classList.remove("expandService-container-animation")}><i className="fas fa-chevron-left"></i></Link></div>
                    <div><Link to={next} onClick={()=> service.current.classList.remove("expandService-container-animation")}><i className="fas fa-chevron-right"></i></Link></div>
                </div>
            </div>               

        </div>

    </article>
    </>
}

export default ExpandService