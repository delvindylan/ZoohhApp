/*
    @Autors: Justin Calle, David Bischof
    Version: 2.0
 */

import { Link } from 'react-router-dom'

export default function Navbar (){

    return(
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Impressum'><li>Impressum</li></Link>
            <Link to='/Tickets'><li>Tickets</li></Link>

            
    
        </ul>
    </div>
    )
}