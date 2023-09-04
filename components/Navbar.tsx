import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Navbar