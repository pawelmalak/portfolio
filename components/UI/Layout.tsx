import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  return (
    <div className='p-0 sm:p-8 lg:mx-auto lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
      {props.children}
    </div>
  );
};
