import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
export default function AuthLayout(){
  return (
    <>
      <Navbar />
      <main className='pt-6'>
        <Outlet />
      </main>
    </>
  );
}