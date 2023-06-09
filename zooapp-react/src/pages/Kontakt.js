import { useState } from "react"

export default function Kontakt () {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Dein Kontaktformular wurde erfolgreich übermittelt.")
    }

    function handleClear() {
        setFirstname("")
        setLastname("")
        setEmail("")
        setMessage("")
    }


    return (

        <div className="Kontakt">
            
            <h1>Kontakt</h1>

            <h2>Kontaktformular</h2>

            <form onSubmit={ (e) => handleSubmit(e) }>
                <table>
                    <thead>
                        <tr>
                            <th>Vorname</th>
                            <th>Nachname</th>
                            <th>Email</th>
                            <th>Nachricht</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) }/></td>
                            <td><input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) }/></td>
                            <td><input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/></td>
                            <td><input type="text" value={message} onChange={ (e) => setMessage(e.target.value) }/></td>
                            <td><input type="submit" value="Submit"/></td>
                            <td><input type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <h3>Deine Übermittelten Informationen sind: </h3>

            <h3> {firstname} </h3>
            <h3> {lastname} </h3>
            <h3> {email} </h3>
            <h3> {message} </h3>
            
        </div>

    )
}