import { SkillItem } from './SkillItem';
import { Skill } from '../../interfaces';

interface Props {
  title?: string;
  skills: Skill[];
}

export const SkillsGrid = (props: Props): JSX.Element => {
  const { title, skills } = props;

  return (
    <div>
      <h6 className='text-lg font-medium text-gray-700'>{title}</h6>
      <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 py-4'>
        {skills.map((skill, idx) => (
          <SkillItem skill={skill} key={idx} />
        ))}
      </div>
    </div>
  );
};
