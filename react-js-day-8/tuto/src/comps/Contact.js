function Contact(props){ 

    return (
        <li>
            <p>
                <strong>
                    {props.fullname}
                </strong>
                <br/>
                <small>{props.phone}</small>
            </p>
        </li>
    );
}


export default Contact;