import type { NextPage, GetStaticProps } from 'next';
import { Section } from '../../components/UI';
import { Projects } from '../../components';
import { ProjectStats } from '../../interfaces';
import { getPopulatedProjects } from '../../utils';

interface Props {
  projects: ProjectStats[];
}

const ProjectsPage: NextPage<Props> = props => {
  return (
    <Section title='Projects'>
      <Projects projects={props.projects} />
    </Section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getPopulatedProjects();

  return {
    props: {
      projects
    }
  };
};

export default ProjectsPage;
