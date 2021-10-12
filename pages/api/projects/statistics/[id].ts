import { NextApiRequest, NextApiResponse } from 'next';
import { readJSON, getData } from '../../../../utils';
import { ProjectsFile, Statistics } from '../../../../interfaces';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const projectId = parseInt(req.query.id as string);

  // get projects and look for given id
  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    res
      .status(404)
      .json({ msg: `Project with id of ${projectId} was not found` });
  } else {
    const statistics: Statistics[] = [];

    // fetch github stars
    const { stargazers_count: githubStars } = await getData<{
      stargazers_count: number;
    }>(`https://api.github.com/repos/pawelmalak/${project.slug}`);

    statistics.push({
      name: 'Github Stars',
      value: githubStars,
      isDetailed: false
    });

    if (req.query.docker && req.query.docker === '1') {
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

    res.status(200).json([...statistics]);
  }
};
