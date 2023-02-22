import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isAction, setIsAction] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsAction(true) : setIsAction(false);
        });
    });
    return (
        <header
            className={`${isAction ? 'bg-white shadow-md py-4' : 'bg-none py-6'} fixed w-full z-10 transition-all `}
        >
            <div className="mx-auto h-full container justify-between flex items-center">
                <Link to={'/'}>
                    <div>
                        <img className="w-[40px]" src={logo} alt="" />
                    </div>
                </Link>
                {/* cart  */}
                <div
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="cursor-pointer text-2xl relative flex"
                >
                    <BsBag />
                    <div className="bg-red-500 text-white rounded-full absolute top-0 left-3 text-[12px] w-[18px] h-[18px] flex justify-center items-center">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
