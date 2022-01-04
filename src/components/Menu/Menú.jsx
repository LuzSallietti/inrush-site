import './menu.scss';
import logoheader from '../../assets/images/logoheader.svg'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




const Menu = () => {    

    return <>
    <Navbar expand="lg" className="navbar-active py-3" variant="dark" id="menu">
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
                    <Nav.Link href="https://inrush.com.ar/articulos/category/novedades">Novedades</Nav.Link>
                    <Nav.Link href="https://inrush.com.ar/articulos/category/articulos-tecnicos/">Artículos técnicos</Nav.Link>
                    <Nav.Link href="/#contactSection">Contacto</Nav.Link>                        
                </Nav>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.instagram.com/inrush_ingenieria/" className="icon-rss-ig me-1"><i className="fab fa-instagram p-1"></i></a>
                    <a href="https://www.linkedin.com/company/inrush" className="icon-rss-linkedin"><i className="fab fa-linkedin-in p-1"></i></a>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
}
export default Menu