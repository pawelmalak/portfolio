import { getData, getDockerToken, readJSON } from '.';
import { ProjectsFile, Statistics } from '../interfaces';

export const getProjectStatistics = async (
  projectId: number,
  fetchDocker: boolean
): Promise<Statistics[] | null> => {
  // get projects and look for given id
  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const project = projects.find(project => project.id === projectId);

  if (process.env.NODE_ENV === 'development') {
    return [
      {
        name: 'DEV STAT',
        value: 0,
        isDetailed: false
      }
    ];
  }

  if (!project) {
    return null;
  } else {
    const statistics: Statistics[] = [];

    // fetch github stars and forks
    const { stargazers_count: githubStars, forks } = await getData<{
      stargazers_count: number;
      forks: number;
    }>(`https://api.github.com/repos/pawelmalak/${project.slug}`, {
      Authorization: process.env.GITHUB_TOKEN
    });

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
      const token = await getDockerToken();

      // fetch docker hub stats
      const { pull_count: dockerPulls, star_count: dockerStars } =
        await getData<{ pull_count: number; star_count: number }>(
          `https://hub.docker.com/v2/repositories/pawelmalak/${project.slug}`,
          { Authorization: `Bearer ${token}` }
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
      `https://api.github.com/search/issues?q=repo:pawelmalak/${project.slug}+type:issue+state:closed`,
      { Authorization: process.env.GITHUB_TOKEN }
    );

    statistics.push({
      name: 'Closed Issues',
      value: closedIssues,
      isDetailed: false
    });

    return statistics;
  }
};
