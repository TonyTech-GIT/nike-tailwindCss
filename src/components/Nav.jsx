import { hamburger } from '../assets/icons'
import headerLogo from '../assets/images/header-logo.svg'

import { navLinks } from '../constants/index'

const Nav = () => {
    const handleClick = () => {
        console.log('hello click!');
    }
    return (
        <header className='padding-x py-8 absolute z-10 w-full '>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="header-logo"
                        width={130}
                        height={29}
                    />

                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a className='font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='max-lg:block hidden cursor-pointer'>
                    <img
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        onClick={handleClick}
                    />
                </div>
            </nav>


        </header>
    )
}

export default Nav
