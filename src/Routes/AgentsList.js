import React from 'react';
import '../CSS/videos.css'
import Nav from '../Components/Nav'
import Agent from '../Components/Agent';

function Agents(props) {
  return (
      <div>
        <Nav title="Agents" name={props.name} id={props.id} content={
          <div className='WrapperVideos'>
            <div class="WrapperList">
                <Agent name="Aaron Bennet" id="1234" role="Agent"/>
                <Agent name="Emilio Wilson" id="3456" role="Agent"/>
                <Agent name="Fernando Rojas" id="2371" role="Agent"/>
                <Agent name="José Gonzáles" id="2340" role="Agent"/>
                <Agent name="Irma Díaz" id="4238" role="Agent"/>
                <Agent name="Laura Hunt" id="2340" role="Agent"/>
            </div>
          </div>
        }/>
      </div>
  );
}
export default Agents;
