import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

function Footer() {
  return (
    <div className='h-16 w-full bg-gray-900/30 text-white flex justify-between items-center px-10'>

        <div>
            Made by Sameer Poswal
        </div>

        <div className='flex flex-row justify-center items-center gap-x-5'>
            
            <a 
              href="https://github.com/poswalsameer"
              target="_blank"
              >
              <Github className='h-5 w-5 hover:text-[#8748f5]' />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sameerposwal/"
              target="_blank"
              >
              <Linkedin className='h-5 w-5 hover:text-[#8748f5]' />
            </a>
            
            <a 
              href="https://twitter.com/sameerposwal03"
              target="_blank"
              >
              <Twitter className='h-5 w-5 hover:text-[#8748f5]'/>
            </a>
        </div>
      
    </div>
  )
}

export default Footer
