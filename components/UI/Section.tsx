import React, { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Section = (props: Props): JSX.Element => {
  const { title, children } = props;
  return (
    <section className='pb-4 px-8 sm:px-0'>
      <h2 className='text-3xl font-bold text-gray-800 my-4 sm:my-6'>{title}</h2>
      {children}
    </section>
  );
};
