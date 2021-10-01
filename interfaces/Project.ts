import { Skill, Statistics } from '.';

export interface Project {
  name: string;
  slug: string;
  links: {
    github: string;
    dockerhub?: string;
    demo?: string;
  };
  description: string;
  techstack: Skill[];
  statistics: Statistics[];
}

export interface ProjectsFile {
  projects: Project[];
}
