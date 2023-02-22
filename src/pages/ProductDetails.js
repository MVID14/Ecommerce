import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    // get the single products dua tren id
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });
    if (!product) {
        return <section className="h-screen flex justify-center items-centers">Loading...</section>;
    }
    const { title, price, description, image } = product;
    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0 ">
                        <img className="max-w-[200px] lg:max-w-sm lg:mr-40" src={image} alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="font-semibold text-xl">{title}</h1>
                        <div className="text-red-500 font-semibold ">$ {price}</div>
                        <div className="text-sm mt-4">{description}</div>
                        <button
                            onClick={(product) => {
                                addToCart(product, product.id);
                            }}
                            className="text-white bg-black py-2 px-8 rounded mt-8"
                        >
                            Mua
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
