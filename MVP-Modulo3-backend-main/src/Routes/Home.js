import React, { useStateml, useEffect } from 'react';
import '../CSS/home.css'
import Nav from '../Components/Nav'
import img from '../images/CallCenterHome.png'
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
  const [showButton, setShowButton] = React.useState(false)

  const navigate = useNavigate();

  // En el sistema se va a tener una suscripción para saber cuándo llegan llamadas entrantes, para establecer la suscripción se genera esta función 
  console.log(`contact.onIncoming( )`)
  // Se obtiene el contact Id de la llamada entrante
  console.log(`contact.getContactId( )`)
  // En este caso lo que pasaría al recibir una llamada se simula con lo siguiente:
  // Después de 1 segundo se simula que ha llegado una llamada y al darle click al botón se comienza a grabar
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowButton(true)
    }, 1000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // Al momento de aceptar una llamada en se deberá llamar contact.accept() y se hará un trigger a la suscripción de contact.onAccepted() para que comience a grabar
  function handleClick() {
    console.log(`contact.accept({
      success: function() { /* ... */ },
      failure: function(err) { /* ... */ }
   });
   `)
    console.log(`contact.onAccepted( )`)
    // Al momento de contestar una llamada se comenzará la grabación de Audio de Amazon connect a través de la siguiente API
    console.log(`POST /contact/start-recording HTTP/1.1
    Content-type: application/json

    {
      "ContactId": "string",
      "InitialContactId": "string",
      "InstanceId": "string",
      "VoiceRecordingConfiguration": { 
      "VoiceRecordingTrack": "string"
    }`)
    // Se recibe el estatus del agente y se cambia a no disponible
    console.log(`agent.getState( )`)
    console.log(`agent.setState( )`)
    navigate("/progress");
}

  return (
      <div>
        <Nav title="Home" name={props.name} id={props.id} content={
            <div className='WrapperHome'>
                <div className='Home'>
                    <h1>Hello {props.name}</h1>
                    <img src={img} alt="Home" />
                    {showButton && <Button variant="contained" startIcon={<CallIcon />} className="PickUpButton" type="submit" onClick={handleClick}>
                      Pick up
                    </Button>}
                </div>
            </div>
        }/>
      </div>
  );
}
export default Home;
