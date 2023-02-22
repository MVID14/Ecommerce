import React from 'react';

import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className=" bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full ">
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center ">
                        <div className="w-10 h-[2px] mr-3 bg-red-500"></div>New Trend
                    </div>
                    <h1 className="text-[70px] leading-[1-1] font-light mb-4">
                        AUTUMN SALE STYLYSH <br /> <span className="font-semibold">WOMENS</span>
                    </h1>
                    <Link to={'/'} className="uppercase font-semibold border-b-2 border-primary self-start">
                        Discovery More
                    </Link>
                </div>
                <div>
                    <img className="hidden lg:block" src={WomanImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
