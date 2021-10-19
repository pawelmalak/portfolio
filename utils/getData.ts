export const getData = async <T>(url: string, headers?: any): Promise<T> => {
  const req = await fetch(url, {
    headers
  });
  const res: T = await req.json();
  return res;
};
