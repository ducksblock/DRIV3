'use client'
import logoB from '/public/assets/logo-black.svg'

const Navbar = () => {
  return (
    <nav className='navbar bg-transparent'>
      <div className='flex justify-center'>
        <img src={logoB} className='logo' />
      </div>
    </nav>
  )
}

export default Navbar
