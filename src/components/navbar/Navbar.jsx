import React from 'react'

export default function Navbar() {
  return (
<nav className="navbar bg-dark">
  <div className="container-fluid">
   <h2 className="text-secondary">LOGO</h2>
   <div className='Nav m-auto'>
   <span className='text-warning px-3'>Navbar</span>
   <span className='text-warning px-3'>Home</span>
   <span className='text-warning px-3'>About</span>
   <span className='text-warning px-3'>Contact</span>
   </div>
  </div>
</nav>

  );
}
