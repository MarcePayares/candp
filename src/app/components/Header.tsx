'use client'
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
          <Image
                className="dark:invert"
                src="/logovm.png"
                alt="vm logo"
                width={50}
                height={38}
                priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href={'/'}>Inicio</Link>
            <Link href={'/contact'}>Contacto</Link>
            <Link href={'/about'}>Sobre Nosotros</Link>
            <Link href={'/sign-in'} className="bg-white py-2 px-5 text-indigo-800 rounded">Ingresar</Link>
            <Link href={'/sign-up'} className="font-bold">Registro</Link>
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
