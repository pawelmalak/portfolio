import { ProjectStats } from '../../interfaces';
import { SimpleIcon } from '../UI';
import { ProjectStatistics, ProjectLink } from '.';

interface Props {
  project: ProjectStats;
}

export const ProjectCard = (props: Props): JSX.Element => {
  const {
    name,
    description,
    techstack,
    statistics,
    links,
    showStatistics,
    id
  } = props.project;

  return (
    <div className='flex flex-col rounded-md overflow-hidden ring-1 ring-blue-600 ring-opacity-20 mb-5 sm:mb-0'>
      <div className='bg-white p-4 sm:p-6 flex flex-col justify-between '>
        {/* TITLE AND DESCRIPTION */}
        <div className='pb-4'>
          <p className='text-xl font-semibold text-gray-900'>{name}</p>
          <p className='mt-3 text-base text-gray-500 h-auto sm:h-32'>
            {description}
          </p>
        </div>

        {/* TECHSTACK */}
        <div className='py-4 border-b border-t border-gray-300 grid grid-cols-5 gap-2 gap-y-4 sm:flex sm:justify-center sm:flex-wrap'>
          {techstack.map(({ icon }, idx) => (
            <span className='flex justify-center mr-0 sm:mr-2' key={idx}>
              <SimpleIcon icon={icon} size={24} key={idx} />
            </span>
          ))}
        </div>

        {/* STATS */}
        {showStatistics && (
          <div className='py-4 flex flex-col sm:flex-row justify-around border-b border-gray-300'>
            <ProjectStatistics statistics={statistics} />
          </div>
        )}

        {/* LINKS */}
        <div className='flex flex-col pt-4'>
          <ProjectLink
            text='Project Details'
            dest={`/projects/${id}`}
            isLocal
          />
          <ProjectLink text='Project Repository' dest={links.github} />
          {links.demo && <ProjectLink text='Live Demo' dest={links.demo} />}
        </div>
      </div>
    </div>
  );
};
