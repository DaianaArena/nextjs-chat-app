//import Image from 'next/image'

import { Inter } from 'next/font/google'
import React, {useContext} from 'react'
const inter = Inter({ subsets: ['latin'] })
import { ContextProvider } from './context'

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        HOME
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
       home
      </p>
      
    </div>
  )
}
