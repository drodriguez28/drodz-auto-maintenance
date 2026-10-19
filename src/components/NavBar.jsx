import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "./Logo";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="!bg-red-800 py-8 mb-5">
      <NavbarBrand as={Link} to="/">
        <Logo size="small" />
      </NavbarBrand>
      <NavbarToggle className="!text-white hover:!bg-red-800 focus:!ring-white [&>svg]:!text-white" />
      <NavbarCollapse className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <NavbarLink as={Link} to="/" className="mx-4 !text-white text-xl">
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/painting" className="mx-4 !text-white text-xl">
          Painting
        </NavbarLink>
        <NavbarLink as={Link} to="/electrical" className="mx-4 !text-white text-xl">
          Electrical
        </NavbarLink>
        <NavbarLink as={Link} to="/fencing" className="mx-4 !text-white text-xl">
          Fencing
        </NavbarLink>
        <NavbarLink as={Link} to="/contact-us" className="mx-4 !text-white text-xl">
          Contact Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};