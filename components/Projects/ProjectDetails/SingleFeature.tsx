import { Feature } from '../../../interfaces/Feature';
import { HeroIcon, IconName } from '../../UI';

interface Props {
  feature: Feature;
}

export const SingleFeature = ({ feature }: Props): JSX.Element => {
  const { name, description } = feature;
  const icon = feature.icon as IconName;

  return (
    <div className='mb-3 sm:mb-0 ring-1 ring-blue-500 ring-opacity-30 p-3 rounded-md'>
      <div className={`flex items-center`}>
        <HeroIcon icon={icon} className='h-6 w-6 text-blue-500' outline />
        <span className='ml-2 text-base text-blue-500 font-medium'>{name}</span>
      </div>
      <p className='ml-8 mt-1 text-gray-700'>{description}</p>
    </div>
  );
};
