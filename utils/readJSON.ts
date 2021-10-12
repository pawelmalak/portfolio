import { readFile } from 'fs/promises';

export const readJSON = async <T>(path: string): Promise<T> => {
  const file = await readFile(path, 'utf-8');
  const data = JSON.parse(file);
  return data;
};
