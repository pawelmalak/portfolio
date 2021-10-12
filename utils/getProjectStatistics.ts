import { getData, readJSON } from '.';
import { ProjectsFile, Statistics } from '../interfaces';

export const getProjectStatistics = async (
  id: number,
  fetchDocker: boolean
): Promise<Statistics[] | null> => {
  // get projects and look for given id
  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const project = projects.find(p => p.id === id);

  if (!project) {
    return null;
  } else {
    const statistics: Statistics[] = [];

    // fetch github stars and forks
    const { stargazers_count: githubStars, forks } = await getData<{
      stargazers_count: number;
      forks: number;
    }>(`https://api.github.com/repos/pawelmalak/${project.slug}`);

    statistics.push(
      {
        name: 'Github Stars',
        value: githubStars,
        isDetailed: false
      },
      {
        name: 'Github Forks',
        value: forks,
        isDetailed: true
      }
    );

    if (fetchDocker) {
      // fetch docker hub stats
      const { pull_count: dockerPulls, star_count: dockerStars } =
        await getData<{ pull_count: number; star_count: number }>(
          `https://hub.docker.com/v2/repositories/pawelmalak/${project.slug}`
        );

      statistics.push(
        {
          name: 'Docker Pulls',
          value: dockerPulls,
          isDetailed: false
        },
        {
          name: 'Docker Stars',
          value: dockerStars,
          isDetailed: true
        }
      );
    }

    // fetch github closed issues
    const { total_count: closedIssues } = await getData<{
      total_count: number;
    }>(
      `https://api.github.com/search/issues?q=repo:pawelmalak/${project.slug}+type:issue+state:closed`
    );

    statistics.push({
      name: 'Closed Issues',
      value: closedIssues,
      isDetailed: false
    });

    return statistics;
  }
};
