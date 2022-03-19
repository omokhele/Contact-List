import './ContactList.css'
import contact from "../data/contact.json"


function ContactList () {
    return(
        <div>
            {
                    contact.map((contact, index) => {
                            return(
                                <div>
                                      <img src= {contact.picture.thumbnail} />
                                      <h3> {contact.name.first} {contact.name.last}</h3>
                                      <p>Home: {contact.phone}</p>
                                      <p>Mobile: {contact.cell}</p>                       
                                </div>
                                 )
                    })
                }

        </div>
    )
}

export default ContactList