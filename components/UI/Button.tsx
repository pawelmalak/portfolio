import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
}

export const Button = (props: Props): JSX.Element => {
  const { children, classes, ...rest } = props;

  const baseClasses =
    'ring-1 ring-white px-5 py-1 rounded-sm hover:bg-white hover:text-blue-800 transition-all';
  const elClasses = `${baseClasses} ${classes}`;

  return (
    <button className={elClasses} {...rest}>
      {children}
    </button>
  );
};
