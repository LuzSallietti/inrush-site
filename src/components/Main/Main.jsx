import Services from "../Services/Services"
import Clients from "../Clients/Clients"
import Nosotros from "../Nosotros/Nosotros"
import EcoExpert from "../EcoExpert/EcoExpert"
import Novedades from "../Novedades/Novedades"


const Main = () => {
    return <>
    <main>
        <Services/>
        <Nosotros/>
        <Clients/>       
        <EcoExpert/>
        <Novedades/>
    </main>
    </>
}
export default Main