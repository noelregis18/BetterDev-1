import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

function Footer() {
  return (
    <div className='h-20 w-full bg-gray-900 text-white flex justify-between items-center px-10'>

        <div>
            Made by Sameer Poswal
        </div>

        <div className='flex flex-row justify-center items-center gap-x-5'>
            <Github />
            <Linkedin />
            <Twitter />
        </div>
      
    </div>
  )
}

export default Footer
