import { useState } from "react"
function Ticket(){

        const [kids, setKids] = useState ()
        const [kidstotal, setKidstotal] = useState ()

        const pricekids = 15
        function calculate(who, price){
            if(isNaN(who)){
                let e = 1
  

            }
            else{

                setKidstotal(who*price) 
   
            }
     

        }

    return(
        <div className="Ticket">
            <div className="Ticketliste">
            <input type="number" min="0" value={kids} onChange={(e) => setKids(parseInt(e.target.value)) && calculate(kids, pricekids) }/>
            <input type="submit" onClick={(e) => calculate(kids, pricekids, kidstotal)} />
          <br />      
            {kidstotal}
            <br />
            {kids*15}
            </div>
        </div>
    )
}
export default Ticket