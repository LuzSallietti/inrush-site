import './footer.scss'

import Contact from "../Contact/Contact"
import Copyright from '../Copyright/Copyright'

const Footer = () => {
    return <>
    <footer className="footer" data-aos="fade-up" id="footer">
        <Contact/>
        <Copyright/>
    </footer>
    </>
}
export default Footer