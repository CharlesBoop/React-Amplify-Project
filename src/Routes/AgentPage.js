
/*
  Describe User Amazon api
  Se utilizara para obtener los atributos del usuario como nombre y id para la seccion de las graficas

  request syntax:
  GET /users/role/AgentId HTTP/1.1

  Describe user api response: JSON 
    const user = 
    {
        userName: name,
        userID: id
    }
  
 */

import Nav from '../Components/Nav'
import Charts from '../Components/Charts';
import '../CSS/agentPage.css'
import { useLocation } from 'react-router-dom';
function AgentPage(props){
    const {state} = useLocation();
    const {name, id} = state;

    

    

    return (
        <div className='agentPage'>
            <Nav title="Amazon RSH" name="Charles R." id="1234" content={
                <div className='WrapperAgent'>
                    <div class="WrapperList">
                        <Charts name={name} id={id} />
                    </div>
                </div>
            }/>
        </div>
    );
}

export default AgentPage;
