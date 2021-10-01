// Node
import fs from 'fs/promises';
import { join } from 'path';

// React & Next
import { Fragment } from 'react';
import type { NextPage, GetStaticProps } from 'next';

// Typescript
import { Project } from '../interfaces/Project';

// Components
import { Header, Navbar, Projects } from '../components';
import { Layout, Section } from '../components/UI';
import { ProjectsFile } from '../interfaces';
import { getData } from '../utils';

interface Props {
  projects: Project[];
}

const Home: NextPage<Props> = props => {
  return (
    <Fragment>
      <Layout>
        {/* <Navbar /> */}
        <Header />
        <Section title='Projects'>
          <Projects projects={props.projects} />
        </Section>
      </Layout>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projectsFile = await fs.readFile('./data/projects.json', 'utf-8');
  const { projects } = JSON.parse(projectsFile) as ProjectsFile;
  const populatedProjects: Project[] = [];

  for await (const project of projects) {
    const { stargazers_count: githubStars } = await getData<{
      stargazers_count: number;
    }>(`https://api.github.com/repos/pawelmalak/${project.slug}`);

    const { pull_count: dockerPulls } = await getData<{ pull_count: number }>(
      `https://hub.docker.com/v2/repositories/pawelmalak/${project.slug}`
    );

    const { total_count: closedIssues } = await getData<{
      total_count: number;
    }>(
      `https://api.github.com/search/issues?q=repo:pawelmalak/${project.slug}+type:issue+state:closed`
    );

    populatedProjects.push({
      ...project,
      statistics: [
        {
          name: 'Github Stars',
          value: githubStars
        },
        {
          name: 'Docker Pulls',
          value: dockerPulls
        },
        {
          name: 'Closed Issues',
          value: closedIssues
        }
      ]
    });
  }

  return {
    props: {
      projects: populatedProjects
    }
  };
};

export default Home;
