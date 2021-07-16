import { useParams } from "react-router-dom";

function ProfilePage(props){
    
    let params = useParams();
    console.log(params);

    let hero = params.hero;
    let name = params.name;
    

    // send hero to server and wait for the hero details

    return(
        <h1>Welcome user {name} : {hero}   </h1>
    );
}

export default ProfilePage;