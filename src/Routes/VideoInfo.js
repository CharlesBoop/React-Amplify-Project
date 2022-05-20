import React, { useState } from 'react';
import Nav from '../Components/Nav'
import VideoDetail from '../Components/VideoDetail';
import VideoList from '../Components/VideoList'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';


function VideoInfo() {
  const{state} = useLocation();
  const{title, date} = state;
 
  return (
      <div>
        <Nav title="Agents" name="Charles R." id="1234" content={
           
        <div className="videoDetail">
          <Box>
            <Grid container rowSpacing={1} columnSpacing ={1}>
            
            <Grid>
            <div className='VideoInfo'>
          <VideoList name={title} date1 = {date}/>

          

          </div>

            </Grid>
            <Grid>
              <div className = 'Details'>
            <VideoDetail name = {title} date = {date} agent_id = "345600" length = "20 minutos" user_id = "980789" user_name = "Karen Macias" solicited = "Account support"  transcript = {title}/>
            </div>
           
            </Grid>

            </Grid>

           

          </Box>
          
         
          </div>
          
         
        }/>
        </div>
      
  );
}
export default VideoInfo;
