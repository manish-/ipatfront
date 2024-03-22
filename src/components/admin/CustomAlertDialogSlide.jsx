import React from 'react';
import { 
            Button,
            Dialog,
            DialogActions,
            DialogContent,
            DialogContentText,
            DialogTitle,
            Slide
        } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomAlertDialogSlide = (props) => {

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Status update confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure to {props.status} ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="error">
                        No, Cancel
                    </Button>
                    <Button onClick={()=>props.handleConfirmationModalSuccess(props.id,props.status)} color="primary">
                    Yes, {props.status}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomAlertDialogSlide;