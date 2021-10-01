import Link from 'next/link';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface Props {
  text: string;
  dest: string;
  isLocal?: boolean;
}

export const ProjectLink = (props: Props): JSX.Element => {
  const { text, dest, isLocal = false } = props;

  const classes =
    'flex items-center cursor-pointer transition-all duration-200 pl-0 hover:pl-5';

  const icon = <ChevronRightIcon className='h-4 w-4 ' />;

  if (isLocal) {
    return (
      <Link href={dest}>
        <span className={classes}>
          {icon}
          {text}
        </span>
      </Link>
    );
  } else {
    return (
      <a href={dest} target='_blank' className={classes}>
        {icon}
        {text}
      </a>
    );
  }
};
