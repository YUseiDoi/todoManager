import React, {useState} from 'react';
import { Add } from 'grommet-icons';

import { Box, Button, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ValidateOnBlur from './InputField';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 'auto',
      height: 'auto',
    },
  }));

const IconLabel = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Grommet theme={grommet}>
            <Box align="center" pad="large">
                <Box align="center" pad="large" gap="medium">
                    <Button
                        icon={<Add />}
                        label="Add New Task"
                        gap="300px"
                        onClick={handleOpen}
                    />
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    ><Fade in={open}>
                            <div className={classes.paper}>
                                <ValidateOnBlur setOpen={setOpen} />
                            </div>
                        </Fade>
                    </Modal>
                </Box>
            </Box>
        </Grommet>
  )
};

IconLabel.story = { name: 'Icon label' };

export default IconLabel;