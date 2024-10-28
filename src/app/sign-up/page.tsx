'use client'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'

import Image from "next/image";
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
        const res = await createUserWithEmailAndPassword(email, password)
        console.log({res})

        if (typeof window !== 'undefined') {
          window.sessionStorage.setItem('user', 'true')
        }
        setEmail('');
        setPassword('')

    } catch(e){
        console.error("Error ", e)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <Link href={'/'}>
          <Image
              className="dark:invert m-auto mb-4"
              src="/logovm.png"
              alt="vm logo"
              width={50}
              height={38}
              priority
          />
        </Link>
        <h1 className="text-white text-2xl mb-5 text-center">Registro</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button 
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 mb-4"
        >
          Registrar
        </button>
        <p className='text-sm'>Si ya tiene una cuenta puede ingresar y agendar su servicio aqui. <Link href={'/sign-in'} className='text-indigo-600 font-bold'>Ingreso</Link></p>
      </div>
     
    </div>
  );
};

export default SignUp;