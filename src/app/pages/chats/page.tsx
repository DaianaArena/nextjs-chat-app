'use client';


//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })
import React, {useEffect, useState, useContext} from 'react'

import { Context } from '../../context'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
//import axios from 'axios';

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module)=>module.ChatEngine) 
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module)=>module.MessageFormSocial)
);

export default function Home() {
  const {username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    if (typeof document !== null){
      setShowChat(true)
    }
  })

  useEffect(()=>{
    if (username === 0 || secret === 0) router.push("/")
  })

  if (!showChat) return <div/>

  return (
    
<div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-center items-center">
      
<div className="shadow w-full mx-10">
<ChatEngine
    height="calc(200vh-200px)"
    projectID={"ed9bcf62-5328-4c8e-aedd-6cce3505b30d"}
    userName={username}
    userSecret={secret}
    
  />
  </div>
</div>
  )
}
/*

renderNewMessageForm={()=> <MessageFormSocial/>}
      
      
      
    
<h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        CHATS
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
       chats
      </p>
*/