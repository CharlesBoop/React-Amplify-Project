import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';




export default function VideoList(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
      
            <div className='Video_Info'>
                <Box>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>                   
              <ListItemText>
              <h1 className='Name'>{props.name}</h1> 
              <h2 className='Date'>{props.date1}</h2>
              </ListItemText>        
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
    </Box>
    </div>

        
    );

    }