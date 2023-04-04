import Navbar from "../components/Navbar";
import Ticketlist from "../components/Ticketlist"

function Ticket(){

    return(
        <div className="Ticket">
            <Navbar/>
            <div className="Ticketliste">
                <Ticketlist/>
            </div>
        </div>
    )
}