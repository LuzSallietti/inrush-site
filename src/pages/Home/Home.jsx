import { useEffect } from 'react';
import './home.scss';
import AOS from 'aos';
import Header from "../../components/Header/Header"
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';


const Home = () => {
    useEffect(() => { 
        setTimeout(() => {
            AOS.init()            
            },1000)        
        }, []);
        
    return  <>
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
            <ScrollTop/>
        </div>
    </>
}
export default Home