import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HomeTwoTone from "@material-ui/icons/HomeTwoTone";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import { SignupButton } from "../SignupButton";
import { LoginButton } from "../LoginButton";
import useStyles from "./styles";
import Auth from "../../utils/auth";

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const loginStyle = {
    display: "inline-block",
    virticalAlign: "middle",
    float: "right",
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      <div>
        {Auth.loggedIn() ? (
          <>
            <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
              My Profile
            </MenuItem>
            <MenuItem onClick={Auth.logout}>Log Out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <LoginButton />
            </MenuItem>
            <MenuItem>
              <SignupButton />
            </MenuItem>
          </>
        )}
      </div>
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
      <div>
        <MenuItem component={Link} to="/">
          <IconButton aria-label="show map" color="inherit">
            <Badge color="primary">
              <MapOutlinedIcon color="black" style={{ fontSize: 50 }} />
            </Badge>
          </IconButton>
          <p>Map</p>
        </MenuItem>
        <MenuItem component={Link} to="/campaigns">
          <IconButton aria-label="show new campaigns" color="inherit">
            <Badge color="primary">
              <ListAltOutlinedIcon color="black" style={{ fontSize: 50 }} />
            </Badge>
          </IconButton>
          <p>Bucket List</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircleOutlinedIcon color="black" style={{ fontSize: 50 }} />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </div>
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
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            style={{ color: "black", textDecoration: "none" }}
            variant="h4"
            noWrap
          >
            B*UCKET
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
              style={{ borderRadius: 30 }}
            />
          </div>
          {/* <div className={classes.grow} /> */}
          <div
            className={classes.sectionDesktop}
            style={{ display: "flex", justifyContent: "center", width: "50%" }}
          >
            <IconButton component={Link} to="/" color="inherit">
              <Badge color="secondary">
                <MapOutlinedIcon color="black" style={{ fontSize: 50 }} />
              </Badge>
            </IconButton>
            <IconButton
              component={Link}
              to="/campaigns"
              aria-label="show new campaigns"
              color="inherit"
            >
              <Badge color="primary">
                <ListAltOutlinedIcon color="black" style={{ fontSize: 50 }} />
              </Badge>
            </IconButton>
          </div>
          {/* <div className={classes.grow} /> */}
          <div
            className={classes.sectionDesktop}
            id="loginSignup"
            style={{ position: "absolute", right: "20px" }}
          >
            {/* <IconButton component={Link} to="/" color="inherit">
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
              <Badge badgeContent={2} color="primary">
                <ListAltTwoToneIcon />
              </Badge>
            </IconButton> */}
            {Auth.loggedIn() ? (
              <IconButton onClick={handleProfileMenuOpen}>
                <AccountCircleOutlinedIcon
                  color="black"
                  style={{ fontSize: 50 }}
                />
              </IconButton>
            ) : (
              <ButtonGroup variant="contained" color="secondary">
                <Button>
                  <LoginButton />
                </Button>
                <Button>
                  <SignupButton />
                </Button>
              </ButtonGroup>
            )}
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
