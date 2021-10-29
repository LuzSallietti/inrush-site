import { useRef } from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';



import './contact.scss'

let company_info= [    
    {
        value: "Email",
        data: "info@inrush.com.ar",
        icon: "fas fa-envelope"     
    },
    {
        value: "Teléfono",
        data: "+54 9 351 7729337",
        icon: "fas fa-phone-alt"      
    },
    {
        value: "Dirección",
        data: "(X5000AVH) Rondeau 370, Ciudad de Córdoba, Argentina",
        icon: "fas fa-map-marker-alt"     
    }

]


const Contact = () => {
   const form = useRef();
   let [sended, setSended] = useState(false);
   let [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o29rgnn', 'contact-form', form.current, 'user_fErMpRtTFONw7v3YDIkXZ')
            .then((result) => {
                if (result.text=== "OK"){                    
                    setSended(true)
                    form.current.reset()
                    setTimeout(() => setSended(false), 4000)
                }  
            }, (error) => {
                if(error.text){
                    setError(true)
                }
            });
    };
   
    return <>
    <div className="contact content-margin" id="contacto">
        <div className="contact-info">
            <ul>
                {company_info.map(({data, value, icon}) => {
                    return <>
                    <li key= {data} >
                        <span>
                            <i className={icon}></i>
                        </span>
                        <div>
                            <h4>{value}</h4>
                            <p>{data}</p>
                        </div>
                    </li>
                    </>
                })}
            </ul>
            <div className="contact-info-map">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kmxBLfoJHzEwd3QVdivoQB3LGwhhIvpt&ll=-31.423908912892166%2C-64.18176940819785&z=17" title="map" className="contact-map"></iframe>
            </div>
        </div>

        <form className="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>            
            {sended ?<div className="contact-form-success"><h6>¡Gracias!<br></br>Recibimos tu mensaje</h6></div>: ""}
            {error ?<div className="contact-form-success"><h5 className="w-100">Algo salió mal :(</h5><h4>Por favor escríbenos a:<br></br>info@inrush.com.ar</h4></div>: ""}           
            <h1 id="contactSection">Contacto</h1>
            <h4>Dejanos tu mensaje</h4>            
            <div className="form-floating mb-3">
                <input type="text" className="form-control bg-transparent text-white" id="name" placeholder="Nombre" name="name" required ></input>
                <label htmlFor="name">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" className="form-control bg-transparent text-white" id="email" placeholder="Correo electrónico" name="email" required></input>
                <label htmlFor="email">Correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control bg-transparent text-white" id="phone" placeholder="Teléfono" name="contact_number"></input>
                <label htmlFor="phone">Teléfono</label>
            </div>
            <div class="form-floating">
                <textarea className="form-control mb-3 bg-transparent text-white" placeholder="Mensaje" id="message" name="message" required></textarea>
                <label htmlFor="message">Mensaje</label>
            </div>
            <button type="submit" className="contact-form-btn">Enviar</button>
        </form>
    </div>
    </>
}
export default Contact