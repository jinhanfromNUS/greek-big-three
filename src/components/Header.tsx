import React from 'react';
import Image from 'next/image';
import '../styles/HeaderFont.css'; // Assuming the font is imported in a CSS file
import { BiHome } from 'react-icons/bi';
import title from '../../public/TheStoryOfBigThree.png'; // Replace with your home icon path
import Link from 'next/link';


const Header = () => {
    return (
        <div className="py-6 bg-black">
            <div className="container sm:flex justify-between items-center"> {/* items-center --> vertically middle */}
                <div className="hidden lg:flex gap-3.5 text-white text-[30px] flex-grow justify-start mysterious-font">
                    <Image src={title} alt="Home" width={200} height={200} className="ml-auto" />
                </div>
                <div className="hidden lg:flex gap-3.5 text-white text-[30px] flex-grow justify-end mysterious-font">
                    <Link href="/">
                        <BiHome />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
