// React & Next
import { Fragment } from 'react';
import type { NextPage, GetStaticProps } from 'next';

// Typescript
import { ProjectStats } from '../interfaces/Project';

// Components
import { HomeHeader, Projects } from '../components';
import { Section } from '../components/UI';
import { ProjectsFile, Statistics } from '../interfaces';
import { getData, readJSON } from '../utils';
import { Skills } from '../components/Skills/Skills';

interface Props {
  projects: ProjectStats[];
}

const HomePage: NextPage<Props> = props => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <HomeHeader />
      <Section title='Projects'>
        <Projects projects={props.projects} />
      </Section>
      <Section title='Skills'>
        <Skills />
      </Section>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const populatedProjects: ProjectStats[] = [];

  for await (const project of projects) {
    const fetchDocker =
      project.links.dockerhub !== undefined ? '?docker=1' : '';

    const statistics = await getData<Statistics[]>(
      `http://localhost:3000/api/projects/statistics/${project.id}${fetchDocker}`
    );

    populatedProjects.push({
      ...project,
      statistics
    });
  }

  return {
    props: {
      projects: populatedProjects
    }
  };
};

export default HomePage;
