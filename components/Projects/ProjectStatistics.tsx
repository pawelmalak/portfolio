import { Fragment } from 'react';
import { Statistics } from '../../interfaces';

interface Props {
  statistics: Statistics[];
  showDetailed?: boolean;
}

export const ProjectStatistics = (props: Props): JSX.Element => {
  const { statistics, showDetailed = false } = props;

  return (
    <Fragment>
      {statistics.map(({ name, value, isDetailed }, idx) => {
        if (!showDetailed && isDetailed) {
          return null;
        }

        return (
          <div
            className='flex flex-row sm:flex-col justify-between items-center text-center'
            key={idx}
          >
            <span className='font-medium'>{name}</span>
            <span className='text-gray-500'>{value}</span>
          </div>
        );
      })}
    </Fragment>
  );
};
