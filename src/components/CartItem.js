import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { id, title, price, image, amount } = item;

    const { increaseAmount, removeCart, decreaseAmount } = useContext(CartContext);

    return (
        <div className="flex gap-x-4 py-4 lg:px-6 border-b border-gray-200 w-full font-light">
            <div className="w-full min-h-[160px] flex items-center gap-x-4  ">
                {/* image  */}
                <Link to={`/product/${id}`}>
                    <img src={image} alt="" className="max-w-[80px]" />
                </Link>
                <div className=" w-full flex flex-col">
                    {/* title  */}
                    <div className="flex justify-between mb-2">
                        <Link
                            to={`/product/${id}`}
                            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                        >
                            {title}
                        </Link>
                        {/* icon close  */}
                        <div
                            onClick={() => {
                                removeCart(id);
                            }}
                            className="flex justify-center items-center cursor-pointer text-xl"
                        >
                            <IoMdClose className="text-gray-500  hover:text-red-500 " />
                        </div>
                    </div>
                    <div className="w-full  flex gap-x-4 text-sm mt-3">
                        <div className=" flex flex-1 max-w-[100px] py-1 items-center h-full border font-medium px-1">
                            <div
                                onClick={() => {
                                    decreaseAmount(id);
                                }}
                                className="flex-1 h-full flex cursor-pointer items-center justify-center"
                            >
                                <IoMdRemove />
                            </div>
                            <div className="flex justify-center items-center px-2">{amount}</div>
                            <div
                                onClick={() => {
                                    increaseAmount(id);
                                }}
                                className="flex flex-1 h-full cursor-pointer items-center justify-center"
                            >
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-around items-center"> $ {price}</div>
                        <div className="flex-1 flex items-center  justify-end font-medium text-primary ">{`$ ${parseFloat(
                            price * amount,
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
