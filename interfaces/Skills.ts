export interface Skill {
  name: string;
  icon: string;
}

export interface SkillsFile {
  languages: Skill[];
  reactEcosystem: Skill[];
  tools: Skill[];
}
