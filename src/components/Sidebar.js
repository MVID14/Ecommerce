import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import CartItem from '../components/CartItem';

import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { isOpen, handleCloseSideBar } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext);

    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full  bg-white 
         fixed top-0 md:max-w-[35vw] xl:max-w-[35vw] lg:max-w-[30vw] px-4 z-20
         transision-all duration-300 shadow-2xl`}
        >
            <div className="flex justify-between items-center py-6 border-b">
                <div className="text-sm uppercase font-semibold">Shopping Bag (0)</div>
                <div
                    onClick={() => {
                        handleCloseSideBar();
                    }}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                    <IoMdArrowForward className="text-2xl " />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 h-[540px] lg:h-[580px] overflow-y-auto overflow-x-hidden border-b">
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>

            <div>
                <div className=" flex w-full justify-between items-center mt-3 ">
                    <div className="font-semibold uppercase">
                        <span className=" mr-2">Total:</span> $ {parseFloat(total).toFixed(2)}
                    </div>
                    <div
                        onClick={() => {
                            clearCart();
                        }}
                        className="cursor-pointer text-xl bg-red-500 w-12 h-12 flex justify-center items-center text-white  "
                    >
                        <FiTrash />
                    </div>
                </div>
            </div>
            <div>
                <Link
                    to={'/'}
                    className="flex justify-center items-center 
                w-full bg-gray-200 mt-2 h-[40px] font-medium"
                >
                    View Cart
                </Link>
                <Link
                    to={'/'}
                    className="flex justify-center items-center 
                w-full bg-primary text-white mt-2 h-[40px] font-medium"
                >
                    Check Out
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
