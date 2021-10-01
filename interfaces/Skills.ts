export interface Skill {
  name: string;
  icon: string;
}

export interface SkillsFile {
  languages: Skill[];
  tools: Skill[];
}
