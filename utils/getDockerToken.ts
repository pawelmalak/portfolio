export const getDockerToken = async (): Promise<string> => {
  const credentials = {
    username: process.env.DOCKER_LOGIN,
    password: process.env.DOCKER_PASS
  };

  const res = await fetch('https://hub.docker.com/v2/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data: { token: string } = await res.json();

  return data.token;
};
