import { useState } from 'react'
import './menu.scss';
import logoheader from '../../assets/images/logoheader.svg'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




const Menu = () => {
    let [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        window.scrollY > 60 ? setNavbar(true) : setNavbar(false)
     }
    window.addEventListener("scroll", changeBackground )

    return <>
    <Navbar expand="lg" className={navbar? "navbar-active py-3": "navbar-active py-3"} variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img
                    src={logoheader}
                    width="150"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="inrush-menu" />
            <Navbar.Collapse id="inrush-menu" className="justify-content-lg-end">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>                        
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/servicios/ingenieria">Ingeniería de detalle</NavDropdown.Item>
                    <NavDropdown.Item href="/servicios/puesta">Puesta en servicio</NavDropdown.Item>
                    <NavDropdown.Item href="/servicios/ensayos">Ensayos</NavDropdown.Item>                        
                    <NavDropdown.Item href="/servicios/proteccion">Protección y control</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="/#novedades">Novedades</Nav.Link>
                    <Nav.Link href="/#link" >Artículos técnicos</Nav.Link>
                    <Nav.Link href="/#contacto">Contacto</Nav.Link>                        
                </Nav>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.instagram.com/inrush_ingenieria/"><i className="fab fa-instagram px-1"></i></a>
                    <a href="https://www.linkedin.com/company/inrush"><i className="fab fa-linkedin-in px-1"></i></a>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
}
export default Menu