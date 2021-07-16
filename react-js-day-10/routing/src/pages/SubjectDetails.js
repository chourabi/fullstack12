import { useParams } from "react-router-dom";

function SubjectDetails(props){
    let params = useParams();

    return(
        <h1>Requesting topinc id : {params.subjectID} from the server ...</h1>
    );
}

export default SubjectDetails;