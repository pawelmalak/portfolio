import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}

export const Header = (props: Props): JSX.Element => {
  const { title, subtitle, children } = props;

  return (
    <div className=''>
      <header className='rounded-none sm:rounded-md p-6 sm:p-8 bg-gradient-to-r from-indigo-600  to-blue-400 text-white flex flex-col'>
        {/* TEXT */}
        <div>
          <h1 className='font-bold text-4xl sm:text-5xl mb-2'>{title}</h1>
          <h4 className='text-lg sm:text-xl'>{subtitle}</h4>
        </div>

        {/* REST */}
        {children}
      </header>
    </div>
  );
};
