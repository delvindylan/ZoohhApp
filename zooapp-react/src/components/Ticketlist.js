import ticketlist from "../css/ticketlist.css"

export default function Ticketlist () {

    const kinderticket = 15;
    const normalticket = 20;
    const tenfoldticket = 160;



    return (
        <div>
            <ul>
                <li className="ticket">
                    <h2>Kinder-Tagesticket</h2>
                    <p className="Info">Kinderticket sind bis im Alter von 16 Jahre und nur mit Identitätsausweis gültig</p>
                    <h3>{kinderticket}</h3>
                    <input type="number" placeholder="Anzahl Ticket"/>
                    <h3>Gesamt:</h3>
                </li>
                <li className="ticket">
                    <h2>Tagesticket</h2>
                    <p className="Info">Normales Ticket mit Zulassung in den Zoo für einen ganzen Tag</p>
                    <h3>{normalticket}</h3>
                    <input type="number" placeholder="Anzahl Ticket"/>
                    <h3>Gesamt:</h3>
                </li>
                <li className="ticket">
                    <h2>10fache Tageskarte</h2>
                    <p className="Info">Treten sie 10 mal ein und zahlen sie nur einmal für den Betrag von 8</p>
                    <h3>{tenfoldticket}</h3>
                    <input type="number" placeholder="Anzahl Ticket"/>
                    <h3>Gesamt:</h3>
                </li>

            </ul>
        </div>
    )
}
