import React from "react";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import HomeTwoTone from "@material-ui/icons/HomeTwoTone";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar({ theme }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
// MOBILE VIEW MENU vvvvvvvvv
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/">
        <IconButton aria-label="show map" color="inherit">
          <Badge color="primary">
            <HomeTwoTone />
          </Badge>
        </IconButton>
        <p>Map</p>
      </MenuItem>
      <MenuItem component={Link} to="/campaigns">
        <IconButton aria-label="show new campaigns" color="inherit">
          <Badge color="primary">
            <ListAltTwoToneIcon />
          </Badge>
        </IconButton>
        <p>Bucket List</p>
      </MenuItem>
      <MenuItem component={Link} to="/profile">
        <IconButton>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
// DESKTOP MENU vvvvvvvvv
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#B4EFB8", color: "#000000" }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            B*ucket
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton component={Link} to="/" color="inherit">
              <Badge color="secondary">
                <HomeTwoTone />
              </Badge>
            </IconButton>
            <IconButton
              component={Link}
              to="/campaigns"
              aria-label="show new campaigns"
              color="inherit"
            >
              <Badge badgeContent={2} color="secondary">
                <ListAltTwoToneIcon />
              </Badge>
            </IconButton>
            <IconButton component={Link} to="/profile">
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

// import React, { useState } from "react";
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone'
// import HomeTwoTone from '@material-ui/icons/HomeTwoTone'

// const useStyles = makeStyles((theme) => ({
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//           backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//           marginLeft: theme.spacing(3),
//           width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     inputRoot: {
//         color: 'inherit',
//       },
//       inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//           width: '20ch',
//         },
//       },
//       sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//           display: 'flex',
//         },
//       },
//       sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//           display: 'none',
//         },
//       },
// } ))

// const Navbar = () => {
//     const classes = useStyles();

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//         <Typography variant="h6" >
//             B*ucket
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 4 new mails" color="inherit">
//               <Badge color="secondary">
//                 <ListAltTwoToneIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <HomeTwoTone />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//             //   aria-controls={menuId}
//               aria-haspopup="true"
//             //   onClick={}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>

//           {/* <Button color="inherit">Login</Button> */}

//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Navbar;
