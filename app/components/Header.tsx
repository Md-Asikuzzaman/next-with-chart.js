'use client';

import { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { toast } from 'react-toastify';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const handleLogOut = () => {
    signOut();

    toast.success('Logged Out!');
  };

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>CMED</a>
      </div>
      <div className='flex-none'>
        <button
          title='Logout'
          onClick={handleLogOut}
          className='btn btn-circle text-white btn-error'
        >
          <AiOutlineLogout className='text-xl' />
        </button>
      </div>
    </div>
  );
};

export default Header;
