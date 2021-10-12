import { NextApiRequest, NextApiResponse } from 'next';
import { getProjectStatistics } from '../../../../utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const projectId = parseInt(req.query.id as string);
  const fetchDocker =
    req.query.docker && req.query.docker === '1' ? true : false;
  const statistics = await getProjectStatistics(projectId, fetchDocker);

  if (!statistics) {
    res
      .status(404)
      .json({ msg: `Project with id of ${projectId} was not found` });
  } else {
    res.status(200).json([...statistics]);
  }
};
