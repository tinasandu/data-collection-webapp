import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function ConditionalLink({ children, to, condition, passState }) {
    const [links, setLinks] = useState(0);

    
    if ((to)) {
        if (links === undefined || links === 0) { 
            const pass = passState.password
            axios.get( 'https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form',
                    { headers: {'content-type': 'application/json',
                                'pass' : pass}})
            .then(res => {
                setLinks( res.data.links)
                console.log(res.data.links)
            })
        }
        return (
            <Link to={to}
                state={{ observerName: passState.observerName,
                        information : passState.information,
                         links : links}}
            >{children}</Link>
        );
    }
}
export default ConditionalLink;