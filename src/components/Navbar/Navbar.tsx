import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import {
  NavbarContainer,
  ImgContainer,
  Img,
  List,
  ListItem,
} from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <ImgContainer>
          <Img src={Logo} alt="logo" />
        </ImgContainer>
      </Link>
      <List>
        <Link to="/">
          <ListItem>Strona główna</ListItem>
        </Link>
        <Link to="/add">
          <ListItem>Dodaj nowy produkt</ListItem>
        </Link>
      </List>
    </NavbarContainer>
  );
};

export default Navbar;
