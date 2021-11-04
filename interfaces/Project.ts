import { Skill, Statistics } from '.';
import { Feature } from './Feature';

export interface Project {
  id: number;
  name: string;
  slug: string;
  links: {
    github: string;
    dockerhub?: string;
    demo?: string;
  };
  description: string;
  techstack: Skill[];
  features: Feature[];
  showStatistics: boolean;
}

export interface ProjectsFile {
  projects: Project[];
}

export interface ProjectStats extends Project {
  statistics: Statistics[];
}
