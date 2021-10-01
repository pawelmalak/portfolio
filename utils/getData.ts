export const getData = async <T>(url: string): Promise<T> => {
  const req = await fetch(url);
  const res: T = await req.json();
  return res;
};
