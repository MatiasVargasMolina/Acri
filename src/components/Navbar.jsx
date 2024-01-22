import React from 'react'

function Navbar() {
  return (
    <div className='bg-transparent fixed flex h-1/6 w-5/6 items-center justify-between shadow-xl rounded-lg '>
      <div className=''><h1 className="text-3xl font-bold  underline ">Logo</h1></div>
        <ul className='flex w-60 justify-between border border-black'>
          <li>Home</li>
          <li>Sobre Nosotros</li>
          <li>Cotiza</li>
        </ul>
        </div>
  )
}

export default Navbar