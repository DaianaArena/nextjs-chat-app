'use client';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React, {useContext} from 'react'
import { Context } from '../../context'
import { useRouter } from 'next/navigation'
import axios from 'axios';

export default function Home() {

    //b56d23c9-3540-415f-aa05-07b3cc47ea6a private key chatengine
    //https://api.chatengine.io/users/ put endpoint
    const router = useRouter()
    const  {
        username,
        setUsername,
        secret,
        setSecret
    } = useContext(Context);

    function onSubmit (e: any) {
        e.preventDefault();

        if (username === 0 || secret === 0) return

        axios.put(
            'https://api.chatengine.io/users/',
            { username, secret },
            {headers: {'Private-key': 'b56d23c9-3540-415f-aa05-07b3cc47ea6a'}}
        )
        .then( r => router.push('/pages/chats'))
        
    }

  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        Welcome
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
      Sign In
      </p>

      <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {e => onSubmit(e)}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="username"
             type="text"
             placeholder="Username"
             onChange = {e => setUsername(e.target.value)}
             />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2"  >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="******************"
      onChange = {e => setSecret(e.target.value)}
      />
      
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  
</div>
<p className="text-center text-gray-500 text-xs">
    This chat project is powered by ChatEngine. This API is paid and may fail to connect. 
  </p>
  <p className="text-center text-gray-500 text-xs">
    This project works only for educational purposes.
  </p>
    </div>
  )
}
//<p className="text-red-500 text-xs italic">Please choose a password.</p>