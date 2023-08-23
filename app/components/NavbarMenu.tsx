'use client';

import { Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';

const NavbarMenu = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            className="mr-3 h-6 sm:h-9"
            src="/weather.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Weather Forecasting
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          
        </div>
        {/* <Navbar.Collapse>
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Navbar.Collapse> */}

      
     
      </Navbar>
    </>
  );
};

export default NavbarMenu;
