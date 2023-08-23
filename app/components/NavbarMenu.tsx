'use client';

import { Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';

const NavbarMenu = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/favicon.svg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Frontend
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
