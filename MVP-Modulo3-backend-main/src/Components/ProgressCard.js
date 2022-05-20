
/*
import React from "react";

//material Design imports
import {MDCDialog} from '@material/dialog';

function ProgressCard(){

    return(
        <div class="mdc-dialog__surface">
        <section id="alert-dialog-description" class="mdc-dialog__content">
            <p>Discard draft?</p>
        </section>
        <footer class="mdc-dialog__actions">
            <button type="button" 
            class="mdc-button mdc-dialog__button mdc-ripple-upgraded" 
            data-mdc-dialog-action="close" 
            style="--mdc-ripple-fg-size:45px; --mdc-ripple-fg-scale:2.10181; --mdc-ripple-fg-translate-start:17.475px, -6.40002px; --mdc-ripple-fg-translate-end:15.7687px, -4.5px;">
                Cancel
            </button>
            <button type="button" 
            class="mdc-button mdc-dialog__button mdc-ripple-upgraded" 
            data-mdc-dialog-action="accept" 
            style="--mdc-ripple-fg-size:49px; --mdc-ripple-fg-scale:2.04364; --mdc-ripple-fg-translate-start:-1.0625px, -2.80002px; --mdc-ripple-fg-translate-end:16.8188px, -6.5px;">
                Discard
            </button>
        </footer>
    </div>
    )

}


export default ProgressCard;

*/

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
