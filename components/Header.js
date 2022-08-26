import React from 'react';
import Image from 'next/image';

export default function Header() {
    return <div>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
            <Image
                src='http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png'
                layout="fill"
                className="object-contain"
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative  lg:hidden'>
            <Image
                src='https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png'
                layout="fill"
                className="object-contain"
            />
        </div>
        </div>;
}
