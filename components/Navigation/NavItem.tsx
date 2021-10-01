import Link from 'next/link';
import { Route } from '../../interfaces';

interface Props {
  route: Route;
}

export const NavItem = (props: Props): JSX.Element => {
  const { name, dest } = props.route;

  return (
    <Link href={dest}>
      <li className='mr-4 hover:bg-gray-800'>{name}</li>
    </Link>
  );
};
