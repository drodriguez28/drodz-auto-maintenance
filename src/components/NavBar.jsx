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
    <Navbar fluid className="!bg-garage-900 border-b-4 border-accent-500 py-6 mb-5">
      <NavbarBrand as={Link} to="/">
        <Logo size="small" />
      </NavbarBrand>
      <NavbarToggle className="!text-white hover:!bg-garage-700 focus:!ring-accent-500 [&>svg]:!text-white" />
      <NavbarCollapse className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <NavbarLink as={Link} to="/" className="mx-4 !text-white hover:!text-accent-400 text-xl">
          Home
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
