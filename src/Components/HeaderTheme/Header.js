import React from "react";
import { Link } from "react-scroll";
import UserNav from "./UserNav";
export default function Header() {
  return (
    <div className='shadow '>
      <div className='h-20 flex justify-between mx-auto items-center bg-red-300 px-4'>
        <Link to='/'>
          <span className='text-3xl animate-pulse text-black'>CYBERFLIX</span>
        </Link>
        <div className='flex gap-5'>
          <Link to='lichChieu' smooth={true}>
            <span className='text-base text-red-500 hover:text-black transition duration-300'>
              LỊCH CHIẾU
            </span>
          </Link>
          <Link to='cumRap' smooth={true}>
            <span className='text-base text-red-500 hover:text-black transition duration-300'>
              CỤM RẠP
            </span>
          </Link>
          <Link to='/detail'>
            <span className='text-base text-red-500 hover:text-black transition duration-300'>
              THÔNG TIN
            </span>
          </Link>
        </div>
        <UserNav />
      </div>
    </div>
  );
}
