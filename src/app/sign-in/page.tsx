'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

import Image from "next/image";
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});

        if (typeof window !== 'undefined') {
          window.sessionStorage.setItem('user', 'true')
        }
        
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
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
        <h1 className="text-white text-2xl mb-5 text-center">Ingresar</h1>
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
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 mb-4"
        >
          Sign In
        </button>
        <p className='text-sm'>Si aun no tiene una cuenta puede registrarse aqui <Link href={'/sign-in'} className='text-indigo-600 font-bold'>Registrar me</Link></p>
      </div>
    </div>
  );
};

export default SignIn;