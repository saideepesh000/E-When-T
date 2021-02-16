import { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const Navbar = ({ setFormOpen }) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu color="blue" fixed>
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          MiVents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default Navbar;
