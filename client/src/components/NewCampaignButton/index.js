import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Modal } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import NewCampaign from '../NewCampaign';

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

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

function NewCampaignButton(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const buttonStyle = {backgroundColor: '#545454', color: 'white', padding:5, borderRadius:5};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} color="secondary" variant="contained" endIcon={<PostAddIcon />}>
        NEW CAMPAIGN
      </Button>
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
        {/* <Fade in={open}> */}
          <div className={classes.paper}>
            {/* <h2 id="spring-modal-title">Sign Up</h2> */}
            <NewCampaign userId={props.userId}/>
          </div>
        {/* </Fade> */}
      </Modal>
    </div>
  );
}
export { NewCampaignButton };