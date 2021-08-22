import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { Navbar, NavbarToggler, Nav, NavbarText, NavItem,  UncontrolledDropdown, DropdownToggle, Media, DropdownMenu, DropdownItem } from "reactstrap";
import avatar from '../assets/images/logo.png';

import { checkAuth, logout, selectSignin } from '../app/reduces/signinSlice';

function Header() {
const { loading, loggedIn, error, loggedInUser} = useSelector(selectSignin);
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    if(!loggedIn){
      dispatch(checkAuth());
    }
  }, [dispatch]);


  function AvatarOption({ _logout }) {
    return (
      <Nav className="align-items-right d-none d-sm-flex" navbar>
        <img
          alt="..."
          src={avatar}
          className="rounded-circle"
          style={{ width: 50, height: 50 }}
        /><h2 className="navbar-brand header-title text-white"
          style={{ paddingTop: 10, fontSize: 24 }}>OPTIMUM</h2>
        <NavItem
          className=" navbar-right"
            onClick={async () => {
              await dispatch(_logout());
              history.push('/');
            }}
          >
          <NavbarText
          style={{color:'red', fontSize:20, cursor:'pointer',marginLeft:'30%'}}>LogOut</NavbarText>  
        </NavItem>
      </Nav>
    );
  }

  return (

    <div className="main-content">
      <Navbar
        style={{
          minHeight: "50px",
          padding: 0,
          margin: 0,
          paddingRight: 5,
          height: "5px",
          backgroundColor: "grey",
        }}
        dark
        expand="sm"
      >
        <NavbarToggler />
        <NavbarText>
          <AvatarOption _logout={logout} />
        </NavbarText>
      </Navbar>
    </div>
  );
}
export default Header;