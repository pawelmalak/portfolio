import { getProjectStatistics, readJSON } from '.';
import { ProjectsFile, ProjectStats } from '../interfaces';

export const getPopulatedProjects = async (): Promise<ProjectStats[]> => {
  const { projects } = await readJSON<ProjectsFile>('data/projects.json');
  const populatedProjects: ProjectStats[] = [];

  for await (const project of projects) {
    const fetchDocker = project.links.dockerhub !== undefined ? true : false;

    const statistics =
      (await getProjectStatistics(project.id, fetchDocker)) || [];

    populatedProjects.push({
      ...project,
      statistics
    });
  }

  return populatedProjects;
};
