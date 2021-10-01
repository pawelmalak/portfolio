import { Project } from '../../interfaces';
import { Button, Card } from '../UI';
import { ProjectStats, ProjectLink } from './';

interface Props {
  project: Project;
}

export const ProjectCard = (props: Props): JSX.Element => {
  const { name, description, techstack, statistics, links } = props.project;

  return (
    <div className='flex flex-col rounded-md overflow-hidden ring-1 ring-blue-600 ring-opacity-20 mb-5 sm:mb-0'>
      <div className='flex-shrink-0'>
        {/* <img className='h-48 w-full object-cover' src={post.imageUrl} alt='' /> */}
      </div>
      <div className='bg-white p-6 flex flex-col justify-between '>
        <div className='pb-4'>
          <a href='/' className='block mt-2'>
            <p className='text-xl font-semibold text-gray-900'>{name}</p>
            <p className='mt-3 text-base text-gray-500 h-32'>{description}</p>
          </a>
        </div>
        <div className='py-4 border-b border-t border-gray-300'>
          {techstack}
        </div>
        <div className=' py-4 flex justify-around'>
          <ProjectStats statistics={statistics} />
          {/* <div className='flex flex-col items-center'>
            <span className='font-medium'>Stars</span>
            <span className='text-blue-600'>{statistics.githubStars}</span>
          </div>
          {statistics.dockerPulls && (
            <div className='flex flex-col items-center'>
              <span>Pulls</span>
              <span>{(statistics.dockerPulls / 1000).toFixed(0)}K</span>
            </div>
          )}
          <div className='flex flex-col items-center'>
            <span>Closed Issues</span>
            <span>{statistics.closedIssues}</span>
          </div> */}
        </div>
        <div className='flex flex-col border-t border-gray-300 pt-4'>
          <ProjectLink text='Project Details' dest={links.github} isLocal />
          <ProjectLink text='Project Repository' dest={links.github} />
          {links.demo && <ProjectLink text='Live Demo' dest={links.demo} />}
        </div>
      </div>
    </div>
  );
};
