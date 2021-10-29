import { useEffect } from 'react'
import { useState } from 'react'

import './novedades.scss'

const Novedades = () => {

    let [isLoading, setIsLoading] = useState(true)
    let [posts, setPosts] = useState(false)

    useEffect(() => {
        fetch('http://inrush.com.ar/articulos/wp-json/wp/v2/posts?categories=25&_embed')
        .then((response) => response.json())
        .then((posts) => {
            setPosts(posts)
            console.log(posts)
            setIsLoading(false)      
        })
    }, []);


    return <>
    <section className="content-margin novedades" id="novedades" data-aos="fade-up" data-aos-duration="1500">
        <h1>Novedades</h1>
        <h4>Conocé nuestros proyectos recientes</h4>
        {isLoading && posts === null && <p>Cargando...</p>}
        {!isLoading && posts && 
        <div className="novedades-container">
            {posts.map((onePost) => {
                return <>
                <article key={onePost.id} className="novedades-article">
                    <div className="novedades-body">
                        <div className="novedades-img">
                            <img src={onePost._embedded[`wp:featuredmedia`][0].source_url} alt={onePost._embedded[`wp:featuredmedia`][0].alt_text}></img>
                        </div>                    
                            <h3>{onePost.title.rendered}</h3>
                            <p dangerouslySetInnerHTML={{__html:`${onePost.excerpt.rendered.slice(0,200)}...`}}></p>                        
                    </div>
                    <a href={onePost.guid.rendered}>Leer más <i className="fas fa-arrow-right"></i></a>
                </article>
                </>
            })}
        </div>
        }
    </section>
    </>
}

export default Novedades