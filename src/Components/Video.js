import '../CSS/videoComponent.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, ListItem, ListItemButton } from '@mui/material';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function Video(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useNavigate();

    const openVideo = ()=>{
        history("detail", {state: {title: props.title, date: props.date}});
    }

    return (
        <div className="videoCard">
            <div className='VideoInfo' onClick={openVideo}>
            
                        <h1 className='Title'>{props.title}</h1>
                        <h2 className='Date'>{props.date}</h2>

                
            </div>
            <IconButton 
            color="primary" 
            className='IconButton'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
                <MoreVertIcon aria-label='actions' className='Icon'/>
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'left',
                    horizontal: 'left',
                }}
                >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Permissions</MenuItem>
            </Menu>
        </div>
    );
  }
  