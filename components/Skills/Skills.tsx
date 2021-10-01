import { Fragment, useState } from 'react';
import { SkillsGrid } from '.';
import { SkillsFile } from '../../interfaces';
import skillsData from '../../data/skills.json';

export const Skills = (): JSX.Element => {
  const [skills] = useState<SkillsFile>(skillsData);

  return (
    <Fragment>
      <SkillsGrid title='Technologies' skills={skills.languages} />
      <SkillsGrid title='Tools' skills={skills.tools} />
    </Fragment>
  );
};
