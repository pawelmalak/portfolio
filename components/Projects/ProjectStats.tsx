import { Fragment } from 'react';
import { Statistics } from '../../interfaces';

interface Props {
  statistics: Statistics[];
}

export const ProjectStats = (props: Props): JSX.Element => {
  const { statistics } = props;

  return (
    <Fragment>
      {statistics.map(({ name, value }, idx) => (
        <div className='flex flex-col items-center text-center' key={idx}>
          <span className='font-medium'>{name}</span>
          <span className='text-gray-500'>{value}</span>
        </div>
      ))}
    </Fragment>
  );
};
