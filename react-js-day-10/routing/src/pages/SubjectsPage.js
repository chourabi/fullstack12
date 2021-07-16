import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import SubjectDetails from "./SubjectDetails";

function SubjectsPage(props){
    let match = useRouteMatch();
    
    return(
        <div>
            <ul>
                <li> 
                    
                    
                    <Link to={`${match.url}/subject-a`} > Subject A </Link>
                </li>
                <li>
                    <Link to={`${match.url}/subject-b`} > Subject B </Link>
                </li> 
            </ul> 
            <Switch>
                <Route path={ `${match.url}/:subjectID` }>
                    <SubjectDetails />
                </Route>


                <Route path={ `${match.url}` }>
                    <h3>Please choose a subject</h3>
                </Route>
                
            </Switch>
        </div>
    );
}

export default SubjectsPage;