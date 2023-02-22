import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEye } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
    const { id, title, image, price, category } = product;
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    {/* {image} */}
                    <div className="w-[160px] flex justify-center items-center">
                        <img
                            className="max-h-[240px] group-hover:scale-90 transition duration-300"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div
                        className="absolute top-3 right-11 group-hover:right-2
                transition-all  p-1 flex flex-col items-center
                 justify-center gap-y-2 opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <button onClick={() => addToCart(product)}>
                            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 border">
                                <BsPlus className="text-3xl " />
                            </div>
                        </button>
                        <div className="flex justify-center items-center border">
                            <Link
                                to={`/product/${id}`}
                                className="w-12 h-12  text-primary bg-white flex justify-center items-center"
                            >
                                <BsEye className="text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* category and price and title  */}
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <div className="font-semibold ">$ {price}</div>
            </div>
        </div>
    );
};

export default Product;
