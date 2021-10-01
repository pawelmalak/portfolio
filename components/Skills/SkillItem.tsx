import { Skill } from '../../interfaces';
import { SimpleIcon } from '../UI';

interface Props {
  skill: Skill;
}

export const SkillItem = (props: Props): JSX.Element => {
  return (
    <div className='flex flex-col items-center text-center p-2'>
      <SimpleIcon icon={props.skill.icon} size={32} />
      <span className='text-gray-600 mt-1'>{props.skill.name}</span>
    </div>
  );
};
