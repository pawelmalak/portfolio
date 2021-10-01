import { ProjectCard } from '.';
import { Project } from '../interfaces/Project';
interface Props {
  projects: Project[];
}

export const Projects = (props: Props): JSX.Element => {
  const { projects } = props;

  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-4'>
      {projects.map((p, idx) => (
        <ProjectCard key={idx} project={p} />
      ))}
    </div>
  );
};
