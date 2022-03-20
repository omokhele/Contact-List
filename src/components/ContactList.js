import './ContactList.css'
import contact from "../data/contact.json"


function ContactList () {
    return(
        <div className="outerDiv">
            {
                    contact.map((contact, index) => {
                            return(
                                <div className="innerDiv">
                                    <img className="image" src= {contact.picture.thumbnail}/>
                                    <div className="innerMostDiv">
                                      
                                      <h3> {contact.name.first} {contact.name.last}</h3>
                                      <p>Home: {contact.phone}</p>
                                      <p>Mobile: {contact.cell}</p> 
                                      </div>                      
                                </div>
                                 )
                    })
                }

        </div>
    )
}

export default ContactList