import Link from 'next/link';
import { Route } from '../../interfaces';
import { routes } from '../../data/routes.json';
import { NavItem } from './NavItem';

export const Navbar = (): JSX.Element => {
  return (
    <nav className='text-black p-4'>
      <ul className='flex items-center'>
        {routes.map((route: Route, idx) => (
          <NavItem key={idx} route={route} />
        ))}
      </ul>
    </nav>
  );
};
