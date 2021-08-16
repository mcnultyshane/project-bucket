import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Modal } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';


import EditAvatar from '../components/EditAvatar';

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
  },
}));


function EditButton(props) {
const user = props;
console.log(user._id);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = (user) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button type="button" onClick={handleOpen}  variant="contained" >
        NEW CAMPAIGN
      </Button> */}
      <Modal
      
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

          <div className={classes.paper}>

            <EditAvatar user={user}  />
          </div>

      </Modal>
    </>
  );
}

export { EditButton };