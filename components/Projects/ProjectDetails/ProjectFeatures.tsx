import { SingleFeature } from '.';
import { Feature } from '../../../interfaces/Feature';

interface Props {
  features: Feature[];
}

export const ProjectFeatures = ({ features }: Props): JSX.Element => {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-3 sm:gap-4'>
      {features.map((feature, idx) => (
        <SingleFeature feature={feature} key={idx} />
      ))}
    </div>
  );
};
