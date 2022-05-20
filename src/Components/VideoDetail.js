import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player'
import '../CSS/videoDetail.css';


export default function VideoDetail(props) {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/videos");
      }
    
       /*Con este endpoint se obtiene tanto la grabación de amazon del 
   audio como para obtener los videos (el video es: [434234 bytes of
    object data] se tendría que desencriptar y se muestra en la pantalla) */

    /*GET /my-image.jpg HTTP/1.1
        {
          Host: bucket.s3.<Region>.amazonaws.com
          Date: Mon, 3 Oct 2016 22:32:00 GMT
          Authorization: authorization string

        }

        //La respuesta que se obtiene a la llamada del s3 da lo siguiente:
        {
 	      x-amz-id-2: eftixk72aD6Ap51TnqcoF8eFidJG9Z/2mkiDFu8yU9AS1ed4OpIszj7UDNEHGran
          x-amz-request-id: 318BC8BC148832E5
          Date: Mon, 3 Oct 2016 22:32:00 GMT
          Last-Modified: Wed, 12 Oct 2009 17:50:00 GMT
          ETag: "fba9dede5f27731c9771645a39863328"
          Content-Length: 434234
          [434234 bytes of object data]
        } 

    
    */
    let file, file1;
   function response () {
        file = "video.mp4";
        file1 = "video.mp3";
   }
   console.log("GET /my-image.jpg HTTP/1.1",
          "{Host: bucket.s3.<Region>.amazonaws.com",
          "Date: Mon, 3 Oct 2016 22:32:00 GMT",
          "Authorization: authorization string}");
    console.log("Get video and transcript in S3 \n", response);
    console.log("{x-amz-id-2: eftixk72aD6Ap51TnqcoF8eFidJG9Z/2mkiDFu8yU9AS1ed4OpIszj7UDNEHGran",
                 " x-amz-request-id: 318BC8BC148832E5",
                  "Date: Mon, 3 Oct 2016 22:32:00 GMT",
                  "Last-Modified: Wed, 12 Oct 2009 17:50:00 GMT",
                  "ETag: fba9dede5f27731c9771645a39863328",
                  "Content-Length: 434234",
                 " [434234 bytes of object data] } ");

    return (
       
        <div className="videoDet">
            <div className='Videofooter'>
                <Box>
                <Grid container rowSpacing={1} columnSpacing ={1}>
                    <Grid>
                    <ArrowBackIcon className = "IconBack" 
                     fontSize="inherit" 
                     style={{ fontSize: "40px" }} 
                     onClick={handleClick}
                    >
                    </ArrowBackIcon>

                    </Grid>
                <Grid>
                <h1 className='Name'>{props.name}</h1>

                </Grid>
                
                </Grid>

                </Box>
            
                
            </div>
            <div className = "video">
                <ReactPlayer
                url = 'https://www.youtube.com/watch?v=pqx59fuXf5c'
                width='100%'
                height='100%'>
                </ReactPlayer>
            </div>
            <div className = "videoInfo">
                <h2>Date</h2>
                <h3 className = 'Date'>{props.date}</h3>
                <h2>Agent ID</h2>
                <h3 className = 'AgentId'>{props.agent_id}</h3>
                <h2>Length</h2>
                <h3 className = 'Length'>{props.length}</h3>
            </div>
            <div class Name = "issue">
                <h2>Issue</h2>
                <h2>Usser ID</h2>
                <h3 className = 'UserId'>{props.user_id}</h3>
                <h2>User Name</h2>
                <h3 className = 'UserName'>{props.user_name}</h3>
                <h2>Solicited Service</h2>
                <h3 className = 'Solicited'>{props.solicited}</h3>
            </div>
            <div className = 'VideoTags'>
                <h2>Related tags</h2>
                 <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                <Chip  label="Solved" color="primary" />
                <Chip  label="To review" color="primary" />
                <Chip  label="Medium quality" color="primary" />
                <Chip  label="Internet search" color="primary" />

                </Stack>
            </div>
            <h2>Video transcript</h2>
            <h3 className = 'VideoTrans'>{props.transcript}</h3>
        </div>
    );
  }
