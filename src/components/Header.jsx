import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const routeMatch = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <header className='max-w-6xl mx-auto py-5 flex justify-between border-b shadow-sm sticky top-0 z-50'>
          {/* logo */}
          <div className='w-32 '>
            <img
            className='cursor-pointer'
              src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
              alt='logo'
              onClick={() => navigate('/')}
            />
          </div>

          {/* nav */}
          <div>
            <ul className='flex justify-between gap-x-6 text-gray-600'>
              <li
                className={`border-b-[3px] py-2 cursor-pointer border-b-transparent ${
                  routeMatch('/') && 'border-b-red-500'
                }`}
                onClick={() => navigate('/')}
              >
                Home
              </li>

              <li
                className={`border-b-[3px] py-2 cursor-pointer border-b-transparent ${
                  routeMatch('/offers') && 'border-b-red-500'
                }`}
                onClick={() => navigate('/offers')}
              >
                Offers
              </li>

              <li
                className={`border-b-[3px] py-2 cursor-pointer border-b-transparent ${
                  routeMatch('/signIn') && 'border-b-red-500'
                }`}
                onClick={() => navigate('/signIn')}
              >
                SignIn
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
