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
        <div className='flex flex-col items-center' key={idx}>
          <span className='font-medium'>{name}</span>
          <span className='text-blue-600'>{value}</span>
        </div>
      ))}
    </Fragment>
  );
};
