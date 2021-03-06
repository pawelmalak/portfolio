import { ProjectCard } from '..';
import { ProjectStats } from '../../interfaces/Project';

interface Props {
  projects: ProjectStats[];
}

export const Projects = (props: Props): JSX.Element => {
  const { projects } = props;

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4'>
      {projects.map((p, idx) => (
        <ProjectCard key={idx} project={p} />
      ))}
    </div>
  );
};
