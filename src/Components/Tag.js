import React from "react";
import { Chip } from "@mui/material";
import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';

function Tag(props) {
    //To manage the chip selection
    const [activeIndex, setActiveIndex] = useState(-1);

    function setClickedChip(index) {
        if(activeIndex === index) {
            setActiveIndex("-1");
        }
        else {
          setActiveIndex(index);
        }
    }

    return(
        <Chip
            variant="outlined"
            label={props.title} 
            color="primary"
            onClick={() => setClickedChip(props.key)}
            icon={<DoneIcon visibility={props.key === activeIndex ? 'visible' : 'hidden'}/>}
        />
    );
}

export default Tag;