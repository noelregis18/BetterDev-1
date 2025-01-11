import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

function Footer() {
  return (
    <div className='
      h-14 w-full bg-gray-900/30 text-white flex justify-between items-center px-10  
      sm:h-16 sm:w-full sm:bg-gray-900/30 sm:text-white sm:flex sm:justify-between sm:items-center sm:px-10
      md:h-16 md:w-full md:bg-gray-900/30 md:text-white md:flex md:justify-between md:items-center md:px-10'>

        <div className='text-sm sm:text-base'>
            Made by Sameer Poswal
        </div>

        <div className='
          flex flex-row justify-center items-center gap-x-3
          sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-x-5
          md:flex md:flex-row md:justify-center md:items-center md:gap-x-5'>
            
            <a 
              href="https://github.com/poswalsameer"
              target="_blank"
              >
              <Github className='
                h-4 w-4 hover:text-[#8748f5]
                sm:h-5 sm:w-5 sm:hover:text-[#8748f5]
                md:h-5 md:w-5 md:hover:text-[#8748f5]' />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sameerposwal/"
              target="_blank"
              >
              <Linkedin className='
                h-4 w-4 hover:text-[#8748f5]
                sm:h-5 sm:w-5 sm:hover:text-[#8748f5]
                md:h-5 md:w-5 md:hover:text-[#8748f5]' />
            </a>
            
            <a 
              href="https://twitter.com/sameerposwal03"
              target="_blank"
              >
              <Twitter className='
                h-4 w-4 hover:text-[#8748f5]
                sm:h-5 sm:w-5 sm:hover:text-[#8748f5]
                md:h-5 md:w-5 md:hover:text-[#8748f5]'/>
            </a>
        </div>
      
    </div>
  )
}

export default Footer
