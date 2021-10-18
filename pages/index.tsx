// React & Next
import { Fragment } from 'react';
import type { NextPage, GetStaticProps } from 'next';

// Typescript
import { ProjectStats } from '../interfaces/Project';

// Components
import { HomeHeader, Projects, Skills } from '../components';
import { Section } from '../components/UI';

// Utils
import { getPopulatedProjects } from '../utils';

interface Props {
  projects: ProjectStats[];
}

const HomePage: NextPage<Props> = props => {
  return (
    <Fragment>
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
  const projects = await getPopulatedProjects();

  return {
    props: {
      projects
    }
  };
};

export default HomePage;
