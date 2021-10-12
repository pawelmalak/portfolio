import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProjectsFile, ProjectStats } from '../../interfaces';
import { getProjectStatistics, readJSON } from '../../utils';
import {
  ProjectFeatures,
  ProjectHeader,
  ProjectStatistics
} from '../../components';
import { Fragment } from 'react';
import { Section } from '../../components/UI';
import { SkillsGrid } from '../../components/Skills';

interface Props {
  project: ProjectStats;
}

const ProjectDetailsPage: NextPage<Props> = props => {
  const { showStatistics, statistics, techstack, features } = props.project;

  return (
    <Fragment>
      {/* HEADER */}
      <ProjectHeader project={props.project} />

      {/* STATS */}
      {showStatistics && (
        <Section title='Statistics'>
          <div className='flex flex-col sm:flex-row justify-around'>
            <ProjectStatistics statistics={statistics} showDetailed />
          </div>
        </Section>
      )}

      {/* TECH */}
      <Section title='Tech Stack'>
        <SkillsGrid skills={techstack} />
      </Section>

      {/* FEATURES */}
      <Section title='Features'>
        <ProjectFeatures features={features} />
      </Section>
    </Fragment>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const projectIds = [1, 2, 3].map(pid => ({ params: { id: pid.toString() } }));

  return {
    paths: projectIds,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { id } = context.params as Params;

  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const project = projects.find(project => project.id === parseInt(id));
  const statistics = (await getProjectStatistics(parseInt(id), true)) || [];

  if (project) {
    return {
      props: {
        project: {
          ...project,
          statistics
        }
      }
    };
  } else {
    return {
      notFound: true
    };
  }
};

export default ProjectDetailsPage;
