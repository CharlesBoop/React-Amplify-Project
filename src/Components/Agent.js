import '../CSS/agentComponent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


export default function Agent(props) {

    const history = useNavigate();
    const routeChange = () =>{ 
    history('agent', {state: {name: props.name, id: props.id}}); 
    }

    return (
        <div className="AgentCard" onClick={routeChange}>
            <div className="Profile">
                <AccountCircleIcon aria-label='profile' className='Icon'/>
            </div>
            <div className='AgentInfo'>
                <h1 className='Name'>{props.name}</h1>
                <h2 className='Id'>{props.id}</h2>
                <h2 className='Role'>{props.role}</h2>
            </div>
        </div>
    );
  }
  